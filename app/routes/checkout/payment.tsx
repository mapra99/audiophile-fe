import { useState, useEffect } from 'react'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from "tiny-invariant"
import { loadStripe } from "@stripe/stripe-js";
import { Text, PaymentForm } from '~/components'
import { getAccessToken } from "~/utils/auth-storage"
import { getSessionId } from "~/utils/session-storage"
import { startPayment } from "~/models/payment"
import { getLastStartedCart } from "~/models/purchase-cart"
import { Elements } from "@stripe/react-stripe-js";

import type { LoaderArgs } from '@remix-run/node'
import type { Stripe, StripeElementsOptions } from '@stripe/stripe-js'

export const loader = async ({ request }: LoaderArgs) => {
  const accessToken = await getAccessToken(request)
  invariant(accessToken, 'user must be authenticated')

  const sessionId = await getSessionId(request)
  invariant(sessionId, 'session must exist')

  const activeCart = await getLastStartedCart(sessionId)
  invariant(activeCart, 'cart must be started')

  const payment = await startPayment(accessToken, activeCart.uuid)
  const stripe_key = process.env.STRIPE_PUBLIC_API_KEY

  return json({ payment, stripe_key })
}

export default () => {
  const { payment, stripe_key } = useLoaderData<typeof loader>()
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null)

  useEffect(() => {
    if (!stripe_key) return
    if (stripePromise) return

    console.log("HOLI")
    setStripePromise(
      loadStripe(stripe_key)
    )
  }, [stripe_key, stripePromise])

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

      { stripePromise && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  )
}
