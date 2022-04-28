import Home from "../Home/Home";
import Payments from "../Payments";
import ConfirmedPaymentPage from "../Payments/OrderConfirmation/ConfirmedPage";

const paymentRoute = [
  { id: 0, path: "/", component: Home },
  { id: 1, path: "/checkout/:client_secret/:ran_number", component: Payments },
  { id: 2, path: "/order_confirmation", component: ConfirmedPaymentPage },
];

export default paymentRoute;
