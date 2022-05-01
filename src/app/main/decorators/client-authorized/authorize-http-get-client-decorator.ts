import axios, { AxiosError } from 'axios';
import { GetStorage, SetStorage } from "~/app/application/protocols/cache";
import { HttpGetClient, HttpGetParams, HttpResponse } from "~/app/application/protocols/http";

type FailedRequestQueueProps = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor(
    private readonly getStorage: SetStorage & GetStorage,
    private readonly httpGetClient: HttpGetClient
  ) { }

  isRefreshing = false
  failedRequestQueue: FailedRequestQueueProps[] = [];

  async get(params: HttpGetParams): Promise<HttpResponse> {
    const account = this.getStorage.get('houpa-sales:account')

    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          Authorization: `Bearer ${account.accessToken}`
        })
      })
    }

    axios.interceptors.response.use(response => {
      return response;
    }, async (error: AxiosError) => {
      const credentials = this.getStorage.get('houpa-sales:account')

      if (error.response?.status === 401) {
        const originalConfig = error.config

        const { NEXT_PUBLIC_BASE_URL } = process.env

        if (credentials?.refreshToken) {
          const api = axios.create({
            baseURL: NEXT_PUBLIC_BASE_URL,
            headers: {
              Authorization: `Bearer ${credentials?.refreshToken}`
            }
          });

          if (!this.isRefreshing) {
            this.isRefreshing = true

            try {
              const response = await api.post('/v1/auth/refreshToken')
              this.getStorage.set('houpa-sales:account', response.data)
              this.failedRequestQueue.forEach(request => request.onSuccess(response.data?.accessToken))
            } catch (error) {
              this.failedRequestQueue.forEach(request => request.onFailure(error as AxiosError))
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
                resolve(api(originalConfig))
              },
              onFailure: (error: AxiosError) => {
                reject(error)
              }
            })
          })
        }
      }

      if (error.response?.status === 403) {
        console.log('403 Forbidden', { account }); // user logout
      }
    })

    const httpResponse = await this.httpGetClient.get(params)
    return httpResponse
  }
}
