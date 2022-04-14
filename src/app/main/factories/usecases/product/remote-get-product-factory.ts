import { RemoteGetProduct } from "~/app/application/usecases"
import { GetProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpGetClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteGetProduct = (): GetProduct => {
  return new RemoteGetProduct(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpGetClientDecorator()
  )
}
