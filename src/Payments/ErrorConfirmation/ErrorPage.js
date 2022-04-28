import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderError from ".";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_API_KEY);

const ErrorPaymentPage = () => {
  const options = {};
  return (
    <React.Fragment>
      <Elements stripe={stripePromise} options={options}>
        <OrderError />
      </Elements>
    </React.Fragment>
  );
};

export default ErrorPaymentPage;
