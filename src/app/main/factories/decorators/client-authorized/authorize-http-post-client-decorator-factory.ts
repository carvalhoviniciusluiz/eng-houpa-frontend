import { HttpPostClient } from "~/app/application/protocols/http"
import { AuthorizeHttpPostClientDecorator } from "~/app/main/decorators"
import { makeLocalStorageAdapter } from "~/app/main/factories/cache"
import { makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeAuthorizedHttpPostClientDecorator = (): HttpPostClient => {
  return new AuthorizeHttpPostClientDecorator(
    makeLocalStorageAdapter(),
    makeAxiosHttpClient()
  )
}
