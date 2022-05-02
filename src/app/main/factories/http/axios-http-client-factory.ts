import { AxiosHttpClient } from "~/app/infra/axios-http-client";
import { makeAxiosHttpValidation } from "~/app/main/factories/http";

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient(
    makeAxiosHttpValidation().getAxiosInstance()
  )
}
