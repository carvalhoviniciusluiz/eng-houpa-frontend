import { HttpPostClient, HttpStatusCode } from '~/app/application/protocols/http'
import { UnexpectedError } from '~/app/domain/errors'
import { AddProduct } from "~/app/domain/usecases"

export class RemoteAddProduct implements AddProduct {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      RemoteAddProduct.Params,
      RemoteAddProduct.Response
    >
  ) { }

  async add(params: RemoteAddProduct.Params): Promise<RemoteAddProduct.Response> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.created:
        return httpResponse.body as RemoteAddProduct.Response
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddProduct {
  export type Params = AddProduct.Params
  export type Response = AddProduct.Response
}
