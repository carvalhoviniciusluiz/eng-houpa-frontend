import { destroyCookie, parseCookies, setCookie } from "nookies"
import { GetStorage, SetStorage } from "~/app/application/protocols/cache"

export class CookieAdapter implements SetStorage, GetStorage {
  set(key: string, value?: object): void {
    if (value) {
      setCookie(undefined, key, JSON.stringify(value), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/' // *
      })
    } else {
      destroyCookie(undefined, key)
    }
  }

  get(key: string): any {
    const { [key]: token } = parseCookies()
    return token ? JSON.parse(token) : undefined
  }
}
