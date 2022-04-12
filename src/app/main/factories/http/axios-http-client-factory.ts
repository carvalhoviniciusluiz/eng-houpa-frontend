import { HttpPostClient } from "~/app/applicaiton/protocols/http"
import { AxiosHttpClient } from "~/app/infra/axios-http-client"

export const makeAxiosHttpClient = (): HttpPostClient => {
  return new AxiosHttpClient()
}
