const payment_details = {
  payment_id: "51935775ER9153254",
  payment_status: "COMPLETED",
  payment_date: "2022-04-07T05:49:02Z",
  payment_link: {
    href: "https://api.sandbox.paypal.com/v2/checkout/orders/51935775ER9153254",
    method: "GET",
    rel: "self",
  },
  payer: {
    address: { country_code: "US" },
    email_address: "sb-dserk15570818@personal.example.com",
    name: { given_name: "John", surname: "Doe" },
    payer_id: "VL9V8AJVE5A6A",
  },
  purchase_units: [
    {
      amount: { currency_code: "USD", value: "100.00" },
      description: "Apple MacBook Pro M1 - 512GB",
      payee: {
        email_address: "sb-4ceux15571000@business.example.com",
        merchant_id: "S5HQYYA37GFLL",
      },
      reference_id: "1",
    },
    {
      amount: { currency_code: "USD", value: "100.00" },
      description: "Apple MacBook Pro M1 - 512GB",
      payee: {
        email_address: "sb-4ceux15571000@business.example.com",
        merchant_id: "S5HQYYA37GFLL",
      },
      reference_id: "1",
    },
  ],
};
