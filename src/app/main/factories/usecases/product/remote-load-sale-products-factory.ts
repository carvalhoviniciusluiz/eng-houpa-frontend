import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeApiUrl, makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeRemoteLoadSaleProducts = (): LoadProducts => {
  return new RemoteLoadProducts(
    makeApiUrl('/v1/products/sales'),
    makeAxiosHttpClient()
  )
}
