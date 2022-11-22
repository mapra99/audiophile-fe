export type ApiVersion = 'v1'
export interface SendRequestOptions {
  authToken?: string;
  sessionToken?: string;
  body?: object;
  apiVersion?: ApiVersion
}

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
