import { HttpPatchClient, HttpStatusCode } from '~/app/application/protocols/http'
import { UnexpectedError } from '~/app/domain/errors'
import { EditProduct } from "~/app/domain/usecases"

export class RemoteEditProduct implements EditProduct {
  constructor(
    private readonly url: string,
    private readonly httpPatchClient: HttpPatchClient<
      RemoteEditProduct.Params,
      RemoteEditProduct.Response
    >
  ) { }

  async edit(id: string, params: RemoteEditProduct.Params): Promise<RemoteEditProduct.Response> {
    const httpResponse = await this.httpPatchClient.patch({
      url: `${this.url}/${id}`,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.created:
        return httpResponse.body as RemoteEditProduct.Response
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteEditProduct {
  export type Params = EditProduct.Params
  export type Response = EditProduct.Response
}
