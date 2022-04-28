import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [process, setProcess] = useState(false);
  const [error, setError] = useState({
    message: "",
    is: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError({
      message: "",
      is: false,
    });

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/order_confirmation",
      },
    });
    setProcess(false);

    if (result.error) {
      setError({
        message: result.error.message.includes(
          "Stripe doesn't currently support this currency with Amex in India."
        )
          ? "We doesn't currently support this currency with Amex in India. Please use another payment method."
          : result.error.message,
        is: true,
      });
    } else {
      setError({
        message: "",
        is: false,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <h6
              style={{
                textTransform: "uppercase",
                color: "#898989",
                fontSize: 13,
              }}
            >
              You're Paying For -
            </h6>
            <h5>ABC Subscription</h5>
            <h6>Amount You're Paying Now €9.95</h6>
            <p style={{ color: "#898989", fontSize: 13 }}>
              <strong>Note: </strong>
              <i>
                Please select your payment method and provide a bank/card
                information to complete the subscription.
              </i>
            </p>
          </div>
          <div className="col-md-6">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
                setProcess(true);
              }}
            >
              <PaymentElement />
              <button
                type="submit"
                disabled={!stripe || process}
                className="btn stripe_pay_button text-white"
              >
                {process ? (
                  <div className="d-flex align-items-center justify-content-center">
                    Processing
                    <div
                      class="spinner-border spinner-border-sm text-light ms-2"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    Pay €9.95 now{" "}
                    <i
                      className="fas fa-lock ms-2"
                      style={{ fontSize: 12 }}
                    ></i>
                  </>
                )}
              </button>
            </form>
            {error.is && (
              <p className="text-danger mt-3 mb-0">{error.message}</p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
