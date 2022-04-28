import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderConfirmation from ".";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_API_KEY);

const ConfirmedPaymentPage = () => {
  const options = {};
  return (
    <React.Fragment>
      <Elements stripe={stripePromise} options={options}>
        <OrderConfirmation />
      </Elements>
    </React.Fragment>
  );
};

export default ConfirmedPaymentPage;
