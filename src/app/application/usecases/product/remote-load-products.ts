import { HttpGetClient, HttpStatusCode } from "~/app/application/protocols/http"
import { AccessDeniedError, UnexpectedError } from "~/app/domain/errors"
import { LoadProducts } from "~/app/domain/usecases"

export class RemoteLoadProducts implements LoadProducts {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteLoadProducts.Response>
  ) { }

  async loadAll(params?: LoadProducts.Params): Promise<RemoteLoadProducts.Response> {
    const httpResponse = await this.httpGetClient.get({ url: this.url, params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as RemoteLoadProducts.Response
      case HttpStatusCode.unauthorized:
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      case HttpStatusCode.noContent:
        return {} as RemoteLoadProducts.Response
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadProducts {
  export type Response = LoadProducts.Response
}
