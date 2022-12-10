import { z } from 'zod'
import * as AudiophileClient from '~/utils/audiophile-client'
import { PurchaseCartSchema } from './schema'


export const getStartedCarts = async (sessionId: string) => {
  const response = await AudiophileClient.sendRequest('get', 'purchase_carts?status=started', { sessionToken: sessionId })
  const carts = z.array(PurchaseCartSchema).parse(response)

  return carts
}

export const getLastStartedCart = async (sessionId: string) => {
  const startedCarts = await getStartedCarts(sessionId)

  return startedCarts.slice(-1)[0]
}
