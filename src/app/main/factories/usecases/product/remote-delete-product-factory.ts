import { RemoteDeleteProduct } from "~/app/application/usecases"
import { DeleteProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpDeleteClientDecorator } from "~/app/main/factories/decorators"

export const makeRemoteDeleteProduct = (): DeleteProduct => {
  return new RemoteDeleteProduct(
    '/v1/products',
    makeAuthorizedHttpDeleteClientDecorator()
  )
}
