import { RemoteDeleteProduct } from "~/app/application/usecases"
import { DeleteProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpDeleteClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteDeleteProduct = (): DeleteProduct => {
  return new RemoteDeleteProduct(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpDeleteClientDecorator()
  )
}
