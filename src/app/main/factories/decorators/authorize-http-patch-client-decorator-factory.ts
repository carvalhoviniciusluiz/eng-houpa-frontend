import { HttpPatchClient } from "~/app/application/protocols/http"
import { AuthorizeHttpPatchClientDecorator } from "~/app/main/decorators"
import { makeLocalStorageAdapter } from "~/app/main/factories/cache"
import { makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeAuthorizedHttpPatchtClientDecorator = (): HttpPatchClient => {
  return new AuthorizeHttpPatchClientDecorator(
    makeLocalStorageAdapter(),
    makeAxiosHttpClient()
  )
}
