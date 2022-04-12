import { GetStorage } from "~/app/application/protocols/cache"
import { HttpGetClient, HttpGetParams, HttpResponse } from "~/app/application/protocols/http"

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpGetClient: HttpGetClient
  ) { }

  async get(params: HttpGetParams): Promise<HttpResponse> {
    const account = this.getStorage.get('houpa-sales:account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          Authorization: `Bearer ${account.accessToken as string}`
        })
      })
    }
    const httpResponse = await this.httpGetClient.get(params)
    return httpResponse
  }
}
