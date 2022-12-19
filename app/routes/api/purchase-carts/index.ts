import { json } from '@remix-run/node'
import { createOrUpdateCart } from '~/models/purchase-cart'
import * as SessionStorage from '~/utils/session-storage'

import type { ActionArgs } from '@remix-run/node'

export const action = async ({ request }: ActionArgs) => {
  const { sessionId } = await SessionStorage.getOrCreateSessionId(request)
  const { item, cartUuid } = await request.json()

  const cart = await createOrUpdateCart(sessionId, item, cartUuid)
  return json({ cart })
}
