import React from "react";

const PayPalPayment = ({ paymentRef }) => {
  return (
    <React.Fragment>
      <div ref={paymentRef} style={{ width: "50%" }}></div>
    </React.Fragment>
  );
};

export default React.memo(PayPalPayment);
