import invariant from 'tiny-invariant'
import { removeCart } from '~/models/purchase-cart'
import { getSessionId } from '~/utils/session-storage'

import type { ActionArgs } from '@remix-run/node'

export const action = async ({ params, request }: ActionArgs) => {
  if (request.method !== 'DELETE') return

  const sessionId = await getSessionId(request)
  invariant(sessionId, 'there must be an active user session')

  const { cartUuid } = params
  invariant(cartUuid, 'cartUuid must exist')

  await removeCart(sessionId, cartUuid)
  return new Response('ok', { status: 200 })
}
