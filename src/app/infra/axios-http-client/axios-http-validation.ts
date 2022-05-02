import { AxiosError, AxiosInstance } from 'axios';
import { GetStorage, SetStorage } from '~/app/application/protocols/cache';

type FailedRequestQueueProps = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

export class AxiosHttpValidation {
  constructor(
    private readonly urlRefreshToken: string,
    private readonly axiosInstance: AxiosInstance,
    private readonly getStorage: SetStorage & GetStorage
  ) { }

  isRefreshing = false
  failedRequestQueue: FailedRequestQueueProps[] = [];

  getAxiosInstance(): AxiosInstance {
    this.axiosInstance.interceptors.response.use(response => {
      return response;
    }, async (error: AxiosError) => {
      const credentials = this.getStorage.get('houpa-sales:account')

      if (error.response?.status === 401) {
        if (credentials?.refreshToken) {
          const originalConfig = error.config

          if (!this.isRefreshing) {
            this.isRefreshing = true

            try {
              const response = await this.axiosInstance.post(this.urlRefreshToken, null, {
                headers: {
                  Authorization: `Bearer ${credentials?.refreshToken}`
                }
              })
              this.getStorage.set('houpa-sales:account', response.data)
              this.failedRequestQueue.forEach(request => {
                request.onSuccess(response.data?.accessToken)
              })
            } catch (error) {
              this.failedRequestQueue.forEach(request => {
                request.onFailure(error as AxiosError)
              })
            } finally {
              this.failedRequestQueue = []
              this.isRefreshing = false
            }
          }

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
    })

    return this.axiosInstance;
  }
}