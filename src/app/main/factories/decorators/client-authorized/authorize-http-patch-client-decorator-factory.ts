import { HttpPatchClient } from "~/app/application/protocols/http"
import { AuthorizeHttpPatchClientDecorator } from "~/app/main/decorators"
import { makeCookieAdapter } from "~/app/main/factories/cache"
import { makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeAuthorizedHttpPatchClientDecorator = (): HttpPatchClient => {
  return new AuthorizeHttpPatchClientDecorator(
    makeCookieAdapter(),
    makeAxiosHttpClient()
  )
}
