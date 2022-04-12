import { AccessDeniedError, UnexpectedError } from "~/app/domain/errors"
import { LoadProductList } from "~/app/domain/usecases"
import { HttpGetClient, HttpStatusCode } from "../../protocols/http"

export class RemoteLoadProductList implements LoadProductList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteLoadProductList.Response[]>
  ) { }

  async loadAll(): Promise<RemoteLoadProductList.Response[]> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as RemoteLoadProductList.Response[]
      case HttpStatusCode.unauthorized:
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      case HttpStatusCode.noContent:
        return []
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadProductList {
  export type Response = LoadProductList.Response
}
