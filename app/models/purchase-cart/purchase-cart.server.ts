import { z } from 'zod'
import * as AudiophileClient from '~/utils/audiophile-client'
import { PurchaseCartSchema } from './schema'

import type { PurchaseCartItemPayload } from './schema'

export const getStartedCarts = async (sessionId: string) => {
  const response = await AudiophileClient.sendRequest('get', 'purchase_carts?status=started', { sessionToken: sessionId })
  const carts = z.array(PurchaseCartSchema).parse(response)

  return carts
}

export const getLastStartedCart = async (sessionId: string) => {
  const startedCarts = await getStartedCarts(sessionId)

  return startedCarts.slice(-1)[0]
}

export const getCartDetails = async(sessionId: string, cartUuid: string) => {
  const response = await AudiophileClient.sendRequest('get', `purchase_carts/${cartUuid}`, { sessionToken: sessionId })
  const cart = PurchaseCartSchema.parse(response)

  return cart
}

export const createCart = async(sessionId: string, cartItems: PurchaseCartItemPayload[]) => {
  const response = await AudiophileClient.sendRequest('post', 'purchase_carts', {
    sessionToken: sessionId,
    body: {
      items: cartItems
    }
  })

  const cart = PurchaseCartSchema.parse(response)
  return cart
}

export const addOrUpdateCartItem = async (sessionId: string, cartUuid: string, item: PurchaseCartItemPayload) => {
  await AudiophileClient.sendRequest('post', `purchase_carts/${cartUuid}/cart_items`, {
    sessionToken: sessionId,
    body: item
  })
}

export const removeItemfromCart = async (sessionId: string, cartUuid: string, cartItemUuid: string) => {
  await AudiophileClient.sendRequest('delete', `purchase_carts/${cartUuid}/cart_items/${cartItemUuid}`, { sessionToken: sessionId })
}

export const createOrUpdateCart = async(sessionId: string, cartItem: PurchaseCartItemPayload, cartUuid?: string) => {
  if (cartUuid) {
    await addOrUpdateCartItem(sessionId, cartUuid, cartItem)
    const updatedCart = await getCartDetails(sessionId, cartUuid)

    return updatedCart
  } else {
    const createdCart = await createCart(sessionId, [cartItem])

    return createdCart
  }
}
