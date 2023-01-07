import { useState, useEffect } from 'react'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from "tiny-invariant"
import { loadStripe } from "@stripe/stripe-js";
import { Text, PaymentForm } from '~/components'
import { getAccessToken } from "~/utils/auth-storage"
import { getSessionId } from "~/utils/session-storage"
import { startPayment } from "~/models/payment"
import { getCartDetails } from "~/models/purchase-cart"
import { Elements } from "@stripe/react-stripe-js";
import stripeStylesheetUrl from "~/styles/stripe-elements.css";

import type { LoaderArgs, LinksFunction } from '@remix-run/node'
import type { Stripe, StripeElementsOptions } from '@stripe/stripe-js'

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stripeStylesheetUrl }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const cartUuid = url.searchParams.get('cart_uuid')
  invariant(cartUuid, 'cart_uuid param must be present')

  const accessToken = await getAccessToken(request)
  invariant(accessToken, 'user must be authenticated')

  const sessionId = await getSessionId(request)
  invariant(sessionId, 'session must exist')

  const payment = await startPayment(accessToken, cartUuid)
  const stripeKey = process.env.STRIPE_PUBLIC_API_KEY
  const redirectUrl = `${process.env.BASE_URL}/checkout?payment_uuid=${payment.uuid}&cart_uuid=${cartUuid}`

  return json({ payment, stripeKey, redirectUrl })
}

export default () => {
  const { payment, stripeKey, redirectUrl } = useLoaderData<typeof loader>()
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null)

  useEffect(() => {
    if (!stripeKey) return
    if (stripePromise) return

    setStripePromise(
      loadStripe(stripeKey)
    )
  }, [stripeKey, stripePromise])

  const options: StripeElementsOptions = {
    clientSecret: payment.client_secret,
    appearance: {
      theme: 'stripe'
    },
  };

  return (
    <div>
      <Text variant="subtitle" as="h3" className="mb-4">
        Payment
      </Text>

      <div className="payment-root">
        { stripePromise && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm redirectUrl={redirectUrl} />
          </Elements>
        )}
      </div>
    </div>
  )
}
