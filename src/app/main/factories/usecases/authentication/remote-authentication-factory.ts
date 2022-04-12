import { RemoteAuthentication } from "~/app/application/usecases"
import { Authentication } from "~/app/domain/usecases"
import { makeApiUrl, makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl('/v1/auth'),
    makeAxiosHttpClient()
  )
}
