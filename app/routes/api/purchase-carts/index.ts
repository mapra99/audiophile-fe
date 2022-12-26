import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { createOrUpdateCart } from '~/models/purchase-cart'
import { getSessionId } from '~/utils/session-storage'

import type { ActionArgs } from '@remix-run/node'

export const action = async ({ request }: ActionArgs) => {
  const sessionId = await getSessionId(request)
  invariant(sessionId, 'sessionId not found')

  const { item, cartUuid } = await request.json()

  const cart = await createOrUpdateCart(sessionId, item, cartUuid)
  return json({ cart })
}
