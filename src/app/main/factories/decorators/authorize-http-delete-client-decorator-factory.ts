import { HttpDeleteClient } from "~/app/application/protocols/http"
import { AuthorizeHttpDeleteClientDecorator } from "~/app/main/decorators"
import { makeLocalStorageAdapter } from "~/app/main/factories/cache"
import { makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeAuthorizedHttpDeleteClientDecorator = (): HttpDeleteClient => {
  return new AuthorizeHttpDeleteClientDecorator(
    makeLocalStorageAdapter(),
    makeAxiosHttpClient()
  )
}
