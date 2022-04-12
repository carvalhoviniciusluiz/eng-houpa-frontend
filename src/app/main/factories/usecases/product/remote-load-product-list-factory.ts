import { RemoteLoadProductList } from "~/app/application/usecases"
import { LoadProductList } from "~/app/domain/usecases"
import { makeAuthorizedHttpGetClientDecorator } from "~/app/main/factories/decorators"
import { makeApiUrl } from "~/app/main/factories/http"

export const makeRemoteLoadProductList = (): LoadProductList => {
  return new RemoteLoadProductList(
    makeApiUrl('/v1/products'),
    makeAuthorizedHttpGetClientDecorator()
  )
}
