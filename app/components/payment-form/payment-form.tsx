import { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import invariant from 'tiny-invariant'

import type { FormEventHandler } from 'react'
import type { PaymentIntentResult } from '@stripe/stripe-js'
import type { PaymentFormProps } from "./types";

const PaymentForm = ({ redirectUrl }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!stripe) return

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")
    if (!clientSecret) return

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: PaymentIntentResult) => {
        invariant(paymentIntent, 'payment intent must exist')

        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: redirectUrl
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        className="!font-bold"
      />
      <PaymentElement
        id="payment-element"
        options={{ layout: "tabs" }}
      />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          { isLoading ? <div className="spinner" id="spinner" /> : "Pay now" }
        </span>
      </button>
      { message && <div id="payment-message">{ message }</div> }
    </form>
  );
}

export default PaymentForm
