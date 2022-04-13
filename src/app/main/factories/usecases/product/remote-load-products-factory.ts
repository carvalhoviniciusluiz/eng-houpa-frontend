import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeAuthorizedHttpGetClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteLoadProducts = (): LoadProducts => {
  return new RemoteLoadProducts(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpGetClientDecorator()
  )
}
