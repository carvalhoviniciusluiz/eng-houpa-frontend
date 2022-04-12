import { Authentication } from "~/app/domain/usecases"
import { RemoteAuthenticationDecorator } from "~/app/main/decorators"
import { makeLocalStorageAdapter } from "~/app/main/factories/cache"
import { makeRemoteAuthentication } from "../usecases"

export const makeRemoteAuthenticationDecorator = (): Authentication => {
  return new RemoteAuthenticationDecorator(
    makeLocalStorageAdapter(),
    makeRemoteAuthentication()
  )
}
