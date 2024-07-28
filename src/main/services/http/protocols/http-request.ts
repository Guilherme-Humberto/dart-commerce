import { HttpMethod } from './http-method'

type HttpQueryParams = {}
export type HttpRequest<T, H> = {
  url: string
  method: HttpMethod
  body?: T
  headers?: H
  queryParams?: HttpQueryParams
  responseType?: any
}
