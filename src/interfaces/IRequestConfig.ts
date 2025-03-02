export interface IRequestConfig {
  type: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  headers: {},
  data?: string
}