import { RemoteEditProduct } from "~/app/application/usecases"
import { EditProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpPatchClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteEditProduct = (): EditProduct => {
  return new RemoteEditProduct(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpPatchClientDecorator()
  )
}
