import { RemoteEditProduct } from "~/app/application/usecases"
import { EditProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpPatchtClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteEditProduct = (productId: string): EditProduct => {
  return new RemoteEditProduct(
    makeApiUrl(`/v1/products/${productId}`),
    makeAuthorizedHttpPatchtClientDecorator()
  )
}
