import React, { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const OrderError = () => {
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent);
      switch (paymentIntent.status) {
        case "succeeded":
          console.log("Payment succeeded!");
          break;
        case "processing":
          console.log("Your payment is processing.");
          break;
        case "requires_payment_method":
          console.log("Your payment was not successful, please try again.");
          break;
        default:
          console.log("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const style = {
    textDecoration: "none",
    color: "#333",
    margin: "0 5px",
    fontSize: 15,
  };
  return (
    <React.Fragment>
      <div className="container my-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#c11818"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        <h4 className="mt-3">Opps</h4>
        <h6>
          Your order is not confirmed! There are some issue with your payment.
        </h6>
        <br />
        <Link to="/" style={style} className="text-danger">
          Home
        </Link>
        <span style={style}>•</span>
        <Link to="/" style={style} className="text-danger">
          Privacy Policy
        </Link>
        <br />
        <span style={style}>
          If you have any questions or concerns feel free to
        </span>
        <a
          href="https://www.linkedin.com/in/mahabubsany/"
          style={style}
          className="ms-0 text-danger"
        >
          Contact Us
        </a>
      </div>
    </React.Fragment>
  );
};

export default OrderError;
