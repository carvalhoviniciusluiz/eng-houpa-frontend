import { RemoteAddProduct } from "~/app/application/usecases"
import { AddProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpPostClientDecorator } from "~/app/main/factories/decorators"

export const makeRemoteAddProduct = (): AddProduct => {
  return new RemoteAddProduct(
    '/v1/products',
    makeAuthorizedHttpPostClientDecorator()
  )
}
