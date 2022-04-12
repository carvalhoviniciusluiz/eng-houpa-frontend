import { AxiosHttpClient } from "~/app/infra/axios-http-client"

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
