import { HttpGetClient } from "~/app/application/protocols/http";
import { AuthorizeHttpGetClientDecorator } from "~/app/main/decorators";
import { makeCookieAdapter } from "~/app/main/factories/cache";
import { makeAxiosHttpClient } from "~/app/main/factories/http";

export const makeAuthorizedHttpGetClientDecorator = (): HttpGetClient => {
  return new AuthorizeHttpGetClientDecorator(
    makeCookieAdapter(),
    makeAxiosHttpClient(),
  )
}