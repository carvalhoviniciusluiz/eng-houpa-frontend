import { Authentication } from "~/app/domain/usecases"
import { AuthenticationDecorator } from "~/app/main/decorators"
import { makeLocalStorageAdapter } from "~/app/main/factories/cache"
import { makeRemoteAuthentication } from "../usecases"

export const makeAuthenticationDecorator = (): Authentication => {
  return new AuthenticationDecorator(
    makeLocalStorageAdapter(),
    makeRemoteAuthentication()
  )
}
