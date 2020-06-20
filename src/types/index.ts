export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'Head'
  | 'options'
  | 'Options'
  | 'post'
  | 'Post'
  | 'put'
  | 'Put'
  | 'patch'
  | 'Patch'
