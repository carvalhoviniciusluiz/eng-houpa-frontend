import axios, { AxiosResponse } from 'axios'
import {
  HttpGetClient,
  HttpGetParams,
  HttpPatchClient,
  HttpPatchParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '~/app/application/protocols/http'

export class AxiosHttpClient implements HttpPostClient, HttpPatchClient, HttpGetClient {
  async post(params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.post(params.url, params.body, {
        headers: params.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

  async patch(params: HttpPatchParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.patch(params.url, params.body, {
        headers: params.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

  async get(params: HttpGetParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(params.url, {
        headers: params.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

  private adapt(axiosResponse: AxiosResponse): HttpResponse {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
