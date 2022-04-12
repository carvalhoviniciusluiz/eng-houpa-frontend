import { HttpResponse } from '~/app/application/protocols/http'

export type HttpPostParams<BodyType = any> = {
  url: string
  body?: BodyType
}

export interface HttpPostClient<BodyType = any, ResponseType = any> {
  post: (
    params: HttpPostParams<BodyType>
  ) => Promise<HttpResponse<ResponseType>>
}
