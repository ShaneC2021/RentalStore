import React from 'react'
import { loadStripe } from "@stripe/stripe-js";



function Payment() {
  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  return (
    <div>Payment</div>
  )
}

export default Payment