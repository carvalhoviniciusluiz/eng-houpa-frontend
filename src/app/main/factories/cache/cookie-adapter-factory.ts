import { CookieAdapter } from "~/app/infra/cache"

export const makeCookieAdapter = (): CookieAdapter => {
  return new CookieAdapter()
}
