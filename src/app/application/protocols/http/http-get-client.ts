import { HttpResponse } from '~/app/application/protocols/http'

export type HttpGetParams = {
  url: string
  headers?: any
}

export interface HttpGetClient<ResponseType = any> {
  get: (
    params: HttpGetParams
  ) => Promise<HttpResponse<ResponseType>>
}
