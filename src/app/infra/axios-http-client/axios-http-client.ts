import axios, { AxiosResponse } from 'axios'
import {
  HttpDeleteClient,
  HttpDeleteParams,
  HttpGetClient,
  HttpGetParams,
  HttpPatchClient,
  HttpPatchParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '~/app/application/protocols/http'

export class AxiosHttpClient implements HttpGetClient, HttpPostClient, HttpPatchClient, HttpDeleteClient {
  async get(params: HttpGetParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(params.url, {
        headers: params.headers,
        params: params.params
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

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

  async delete(params: HttpDeleteParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.delete(params.url, {
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
