import * as AudiophileClient from './audiophile-client.server'
import type { Mock } from 'vitest'

describe("sendRequest", () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ response: true }),
      ok: true
    }
  )) as Mock;

  describe ("when request has no body and there is no auth or session token", () => {
    beforeEach(async () => {
      await AudiophileClient.sendRequest("get", "health")
    })

    it('calls the API', async () => {
      expect(fetch).toHaveBeenCalledWith(
        "http://0.0.0.0:3001/api/v1/health",
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'X-AUDIOPHILE-KEY': 'audiophile'
          },
          body: undefined
        }
      )
    })
  })

  describe("when request has auth and session tokens", () => {
    beforeEach(async () => {
      await AudiophileClient.sendRequest("get", "product_categories", { authToken: "auth123", sessionToken: "session123" })
    })

    it('calls the API', async () => {
      expect(fetch).toHaveBeenCalledWith(
        "http://0.0.0.0:3001/api/v1/product_categories",
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer auth123',
            'X-AUDIOPHILE-KEY': 'audiophile',
            'X-SESSION-ID': 'session123'
          },
          body: undefined
        }
      )
    })
  })

  describe('when request goes with a different API version', () => {
    beforeEach(async () => {
      await AudiophileClient.sendRequest("get", "product_categories", { apiVersion: "v1" })
    })

    it('calls the API', async () => {
      expect(fetch).toHaveBeenCalledWith(
        "http://0.0.0.0:3001/api/v1/product_categories",
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'X-AUDIOPHILE-KEY': 'audiophile'
          },
          body: undefined
        }
      )
    })
  })
})
