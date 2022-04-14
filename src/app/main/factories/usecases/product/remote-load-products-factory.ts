import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeApiUrl } from "~/app/main/factories/http"
import { makeAuthorizedHttpGetClientDecorator } from "../../decorators/authorize-http-get-client-decorator-factory"

export const makeRemoteLoadProducts = (): LoadProducts => {
  return new RemoteLoadProducts(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpGetClientDecorator()
  )
}
