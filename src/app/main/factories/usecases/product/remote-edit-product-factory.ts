import { RemoteEditProduct } from "~/app/application/usecases"
import { EditProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpPatchClientDecorator } from "~/app/main/factories/decorators"

export const makeRemoteEditProduct = (): EditProduct => {
  return new RemoteEditProduct(
    '/v1/products',
    makeAuthorizedHttpPatchClientDecorator()
  )
}
