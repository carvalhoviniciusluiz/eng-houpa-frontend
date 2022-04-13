import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeApiUrl, makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeRemoteLoadProducts = (): LoadProducts => {
  return new RemoteLoadProducts(
    makeApiUrl('/v1/products'),
    makeAxiosHttpClient()
  )
}
