import axios, { AxiosResponse } from 'axios'
import { HttpPostClient, HttpPostParams, HttpResponse } from '~/app/application/protocols/http'

export class AxiosHttpClient implements HttpPostClient {
  async post(params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.post(params.url, params.body)
    } catch (error: any) {
      axiosResponse = error?.response
    }
    const response = {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
    return response
  }
}
