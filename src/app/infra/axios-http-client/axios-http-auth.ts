import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { GetStorage, SetStorage } from '~/app/application/protocols/cache';

type FailedRequestQueueProps = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

export class AxiosHttpAuth {
  constructor(
    private readonly urlRefreshToken: string,
    private readonly axiosInstance: AxiosInstance,
    private readonly getStorage: SetStorage & GetStorage
  ) { }

  isRefreshing = false
  failedRequestQueue: FailedRequestQueueProps[] = [];

  getAxiosInstance(): AxiosInstance {
    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
      const credentials = this.getStorage.get('houpa-sales:account')

      if (error.response?.status === 401 && credentials?.refreshToken) {
        const originalConfig = error.config

        if (!this.isRefreshing) {
          this.isRefreshing = true

          this.axiosInstance.post(this.urlRefreshToken, null, {
            headers: {
              Authorization: `Bearer ${credentials?.refreshToken}`
            }
          })
            .then((response: AxiosResponse) => {
              this.getStorage.set('houpa-sales:account', response.data)
              this.failedRequestQueue.forEach(request => {
                request.onSuccess(response.data?.accessToken)
              })
            })
            .catch((error: AxiosError) => {
              this.failedRequestQueue.forEach(request => {
                request.onFailure(error)
              })
            })
            .finally(() => {
              this.failedRequestQueue = []
              this.isRefreshing = false
            })

          return new Promise((resolve, reject) => {
            this.failedRequestQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers = {
                  Authorization: `Bearer ${token}`
                }
                resolve(this.axiosInstance(originalConfig))
              },
              onFailure: (error: AxiosError) => {
                reject(error)
              }
            })
          })
        }
      }

      if (error.response?.status === 403) {
        this.getStorage.set('houpa-sales:account')
      }

      return Promise.reject(error);
    })

    return this.axiosInstance;
  }
}