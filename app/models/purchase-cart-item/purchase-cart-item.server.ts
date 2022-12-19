import * as AudiophileClient from '~/utils/audiophile-client'

import type { PurchaseCartItemPayload } from './schema'

export const addOrUpdateCartItem = async (sessionId: string, cartUuid: string, item: PurchaseCartItemPayload) => {
  await AudiophileClient.sendRequest('post', `purchase_carts/${cartUuid}/cart_items`, {
    sessionToken: sessionId,
    body: item
  })
}

export const removeItemfromCart = async (sessionId: string, cartUuid: string, cartItemUuid: string) => {
  await AudiophileClient.sendRequest('delete', `purchase_carts/${cartUuid}/cart_items/${cartItemUuid}`, { sessionToken: sessionId })
}
