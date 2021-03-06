import { HttpGetClient, HttpStatusCode } from "~/app/application/protocols/http"
import { AccessDeniedError, UnexpectedError } from "~/app/domain/errors"
import { GetProduct } from "~/app/domain/usecases"

export class RemoteGetProduct implements GetProduct {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteGetProduct.Response>
  ) { }

  async get(id: string): Promise<RemoteGetProduct.Response> {
    const httpResponse = await this.httpGetClient.get({
      url: `${this.url}/${id}`
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as RemoteGetProduct.Response
      case HttpStatusCode.unauthorized:
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      case HttpStatusCode.noContent:
        return {} as RemoteGetProduct.Response
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteGetProduct {
  export type Response = GetProduct.Response
}
