import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout/Checkout";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51J7ha6BLUqxG5wMn2QMNh2EppLGekKVpSgSWCyqE9TQkLKJ4R3zB7v4VhYSYQ17vWOOq9oscWf0P3ztfCZQjMalZ002c9k1TyD"
);

const Payments = () => {
  const { client_secret, ran_number } = useParams();
  const options = {
    clientSecret: client_secret,
  };
  return (
    <React.Fragment>
      <Elements stripe={stripePromise} options={options}>
        <Checkout />
      </Elements>
    </React.Fragment>
  );
};

export default Payments;
