import { RemoteAddProduct } from "~/app/application/usecases"
import { AddProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpPostClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteAddProduct = (): AddProduct => {
  return new RemoteAddProduct(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpPostClientDecorator()
  )
}
