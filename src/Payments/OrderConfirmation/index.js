import React, { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
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
          fill="#61af43"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <h4 className="mt-3">Great News</h4>
        <h6>Your order is confirmed! Thank you for your order!</h6>
        <br />
        <a
          href="https://www.linkedin.com/in/mahabubsany/"
          style={style}
          className="text-danger"
          target="_blank"
          rel="noreferrer"
        >
          View Your Profile
        </a>
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

export default OrderConfirmation;
