import { RemoteRegister } from "~/app/applicaiton/usecases"
import { Register } from "~/app/domain/usecases"
import { makeApiUrl, makeAxiosHttpClient } from "~/app/main/factories/http"

export const makeRemoteRegister = (): Register => {
  return new RemoteRegister(
    makeApiUrl('/v1/auth/signup'),
    makeAxiosHttpClient()
  )
}
