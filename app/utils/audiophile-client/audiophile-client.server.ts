import invariant from 'tiny-invariant'
import RequestError from '~/errors/request-error'
import type { SendRequestOptions, RequestMethod, ApiVersion } from './types'

const BASE_URL = process.env.AUDIOPHILE_API_BASE_URL
const API_KEY = process.env.AUDIOPHILE_API_KEY
const API_VERSION = process.env.AUDIOPHILE_API_VERSION

invariant(BASE_URL, 'AUDIOPHILE_BASE_URL env var should be present')
invariant(API_KEY, 'AUDIOPHILE_API_KEY env var should be present')
invariant(API_VERSION, 'AUDIOPHILE_API_VERSION env var should be present')

const buildHeaders = (authToken?: string, sessionToken?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-AUDIOPHILE-KEY': API_KEY
  }

  if (authToken) headers['Authorization'] = `Bearer ${authToken}`
  if (sessionToken) headers['X-SESSION-ID'] = sessionToken

  return headers
}

const buildUrl = (path: string, apiVersion?: ApiVersion) => {
  const fullPath = ['api', apiVersion || API_VERSION, path].join('/')
  return new URL(fullPath, BASE_URL).toString()
}

export const sendRequest = async (method: RequestMethod, path: string, { authToken, sessionToken, body, apiVersion }: SendRequestOptions = {}) => {
  const headers = buildHeaders(authToken, sessionToken);
  const formattedBody = JSON.stringify(body)

  const request: RequestInit = {
    method,
    headers,
    body: formattedBody
  }

  const url = buildUrl(path, apiVersion)

  const response = await fetch(url, request)
  const result = await response.json();

  if (!response.ok) throw new RequestError(response.status, result);

  return result
}
