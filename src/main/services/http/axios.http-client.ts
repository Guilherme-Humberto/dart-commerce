import axios, { AxiosResponse } from 'axios'
import { HttpClient } from './protocols/http-client'
import { HttpResponse } from './protocols/http-response'
import { HttpRequest } from './protocols/http-request'

export class AxiosHttpClient implements HttpClient<any, any, any> {
  constructor() {}

  async request(data: HttpRequest<any, any>): Promise<HttpResponse<any>> {
    try {
      const httpResponse: AxiosResponse = await axios.request({
        url: data.url,
        data: data.body,
        params: data.queryParams,
        method: data.method,
        responseType: data.responseType || 'json'
      })

      return {
        statusCode: httpResponse.status,
        body: httpResponse.data
      }
    } catch (error) {
      throw error
    }
  }
}
