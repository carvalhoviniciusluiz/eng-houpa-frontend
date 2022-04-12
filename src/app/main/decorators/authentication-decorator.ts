import { SetStorage } from "~/app/applicaiton/protocols/cache"
import { Authentication } from "~/app/domain/usecases"

export class AuthenticationDecorator implements Authentication {
  constructor(
    private readonly setStorage: SetStorage,
    private readonly remoteAuthentication: Authentication
  ) { }

  async auth(params: Authentication.Params): Promise<Authentication.Response> {
    const httpResponse = await this.remoteAuthentication.auth(params)
    this.setStorage.set('houpa-sales:account', httpResponse)
    return httpResponse
  }
}
