import { AxiosHttpValidation } from '~/app/infra/axios-http-client';
import { makeCookieAdapter } from "~/app/main/factories/cache";
import { makeAxios } from "~/app/main/factories/http";

export const makeAxiosHttpValidation = (context?: any): AxiosHttpValidation => {
  return new AxiosHttpValidation(
    '/v1/auth/refreshToken',
    makeAxios(),
    makeCookieAdapter(context)
  )
}
