import { AxiosHttpClient } from "~/app/infra/axios-http-client";
import { makeAxios } from "~/app/main/factories/http";

export const makeAxiosHttpClient = (axiosInstance = makeAxios()): AxiosHttpClient => {
  return new AxiosHttpClient(axiosInstance)
}
