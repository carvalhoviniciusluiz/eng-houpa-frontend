import { RemoteGetProduct } from "~/app/application/usecases"
import { GetProduct } from "~/app/domain/usecases"
import { makeAuthorizedHttpGetClientDecorator } from "~/app/main/factories/decorators"

export const makeRemoteGetProduct = (context?: any): GetProduct => {
  return new RemoteGetProduct(
    '/v1/products',
    makeAuthorizedHttpGetClientDecorator(context)
  )
}
