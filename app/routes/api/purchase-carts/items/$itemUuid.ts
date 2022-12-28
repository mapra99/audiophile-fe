import invariant from 'tiny-invariant'
import { removeItemfromCart } from '~/models/purchase-cart-item'
import { getSessionId } from '~/utils/session-storage'

import type { ActionArgs } from '@remix-run/node'
import { getLastStartedCart } from '~/models/purchase-cart'

export const action = async ({ params, request }: ActionArgs) => {
  if (request.method !== 'DELETE') return

  const sessionId = await getSessionId(request)
  invariant(sessionId, 'there must be an active user session')

  const { itemUuid } = params
  invariant(itemUuid, 'itemUuid must exist')

  const activeCart = await getLastStartedCart(sessionId)
  invariant(activeCart, 'there must be an active started cart')

  await removeItemfromCart(sessionId, activeCart.uuid, itemUuid)
  return new Response('ok', { status: 200 })
}
