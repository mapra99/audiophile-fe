import { Outlet, useLoaderData } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Text, PurchaseCartSummary, ProgressBar } from '~/components'
import { getLastStartedCart } from '~/models/purchase-cart'
import { getSessionId } from '~/utils/session-storage'
import trackPageView from '~/utils/track-page-view'
import { getAccessToken } from '~/utils/auth-storage'
import goBack from '~/utils/go-back'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  trackPageView(request)

  const sessionId = await getSessionId(request)
  invariant(sessionId, 'sessionId must exist')

  const activeCart = await getLastStartedCart(sessionId)
  if(!activeCart) return redirect('/')

  // checkout flow navigation
  let progress = "0";

  const url = new URL(request.url)
  const accessToken = await getAccessToken(request)
  if(!accessToken) {
    progress = "33%"
    if (url.pathname === '/checkout') return redirect('/checkout/billing-details')
  } else if (!activeCart.user_location_uuid) {
    progress = "66%"
    if (url.pathname === '/checkout') return redirect('/checkout/shipping-info')
  } else {
    progress = "100%"
    if (url.pathname === '/checkout') return redirect('/checkout/payment')
  }

  return json({ activeCart, progress })
}

export default () => {
  const { activeCart, progress } = useLoaderData<typeof loader>()

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
          <div className="rounded-lg bg-white px-6 py-8 sm:p-8 lg:flex-1 lg:pt-14 lg:px-12 lg:pb-12 relative">
            <div className="absolute top-0 left-0 w-full">
              <ProgressBar progress={progress} />
            </div>

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
