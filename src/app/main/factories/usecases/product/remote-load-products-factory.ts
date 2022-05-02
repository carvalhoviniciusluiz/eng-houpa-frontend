import { RemoteLoadProducts } from "~/app/application/usecases"
import { LoadProducts } from "~/app/domain/usecases"
import { makeAuthorizedHttpGetClientDecorator } from "~/app/main/factories/decorators"

export const makeRemoteLoadProducts = (context?: any): LoadProducts => {
  return new RemoteLoadProducts(
    '/v1/products',
    makeAuthorizedHttpGetClientDecorator(context)
  )
}
