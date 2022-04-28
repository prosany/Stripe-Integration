import React, { useRef, useState } from "react";
import PayPalPayment from "../components/PayPalPayment";
import axios from "axios";

const Home = () => {
  const [activePaypal, setActivePaypal] = useState(false);
  const paymentRef = useRef(null);
  const paymentGateway = () => {
    if (!!paymentRef.current) {
      paymentRef.current.innerHTML = "";
    }
    setActivePaypal(!activePaypal);
    setTimeout(() => {
      window.paypal
        .Buttons({
          style: {
            size: "responsive",
            color: "blue",
            shape: "pill",
            label: "checkout",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  reference_id: 1,
                  name: "Apple MacBook Pro M1 - 512GB",
                  description: "Apple MacBook Pro M1 - 512GB",
                  amount: {
                    currency_code: "USD",
                    value: 100.0,
                  },
                },

                {
                  reference_id: 2,
                  name: "Apple MacBook Pro M1 - 512GB",
                  description: "Apple MacBook Pro M1 - 512GB",
                  amount: {
                    currency_code: "USD",
                    value: 100.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const orderSummery = await actions.order.capture();
            console.log("📌 | onApprove: | orderSummery", orderSummery);
          },
          onError: async (error) => {
            console.log("📌 | onError: | error", error);
          },
        })
        .render(paymentRef.current);
    }, 100);
  };

  const handleStripePayment = async () => {
    const results = await axios.post(
      "https://beumont.herokuapp.com/api/create-payment"
    );
    if (results.data.status === 1) {
      window.location.href = `/checkout/${results.data.client_secret}/${results.data.created}`;
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Paypal Checkout Page</h1>
      <button onClick={paymentGateway} className="stripe_pay_button">
        Pay with PayPal
      </button>
      <PayPalPayment paymentRef={paymentRef} />

      <br />
      <button onClick={handleStripePayment} className="stripe_pay_button">
        Pay 10$ with Card
      </button>
    </div>
  );
};

export default Home;
