import { Outlet, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Text, PurchaseCartSummary } from '~/components'
import { getLastStartedCart } from '~/models/purchase-cart'
import * as SessionStorage from '~/utils/session-storage'
import trackPageView from '~/utils/track-page-view'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  trackPageView(request)

  const { sessionId } = await SessionStorage.getOrCreateSessionId(request)

  const activeCart = await getLastStartedCart(sessionId)
  invariant(activeCart, 'There must be an existing started cart')

  return json({ activeCart })
}

export default () => {
  const { activeCart } = useLoaderData()
  const goBack = () => history.back()

  return (
    <div className="bg-gray">
      <div className="pt-4 pb-6 px-6 sm:pt-12 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <button onClick={goBack} className="text-base text-black opacity-50 hover:opacity-100 transition">
            Go Back
          </button>
        </div>
      </div>

      <div className="px-6 pb-24 sm:px-10 sm:pb-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:flex-row">
          <div className="rounded-lg bg-white px-6 py-8 sm:p-8 lg:flex-1 lg:pt-14 lg:px-12 lg:pb-12">
            <Text variant="heading-3" className="!text-3xl sm:!text-4xl mb-8 sm:mb-10" as="h2">
              Checkout
            </Text>

            <Outlet />
          </div>

          <div className="lg:flex-0.5">
            <PurchaseCartSummary cart={activeCart} />
          </div>
        </div>
      </div>
    </div>
  )
}
