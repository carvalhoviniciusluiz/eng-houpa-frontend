import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeRemoteLoadSaleProducts = (context?: any): LoadProducts => {
  return new RemoteLoadProducts(
    '/v1/products/sales',
    makeAxiosHttpClient(context)
  )
}
