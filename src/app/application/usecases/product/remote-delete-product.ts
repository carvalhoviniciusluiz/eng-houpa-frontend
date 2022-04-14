import { HttpDeleteClient, HttpStatusCode } from '~/app/application/protocols/http'
import { UnexpectedError } from '~/app/domain/errors'
import { DeleteProduct } from "~/app/domain/usecases"

export class RemoteDeleteProduct implements DeleteProduct {
  constructor(
    private readonly url: string,
    private readonly httpDeleteClient: HttpDeleteClient<
      RemoteDeleteProduct.Response
    >
  ) { }

  async delete(id: string): Promise<RemoteDeleteProduct.Response> {
    const httpResponse = await this.httpDeleteClient.delete({
      url: `${this.url}/${id}`
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.created:
        return httpResponse.body as RemoteDeleteProduct.Response
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteDeleteProduct {
  export type Response = DeleteProduct.Response
}
