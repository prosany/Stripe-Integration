import Home from "../Home/Home";
import Payments from "../Payments";
import ErrorPaymentPage from "../Payments/ErrorConfirmation/ErrorPage";
import ConfirmedPaymentPage from "../Payments/OrderConfirmation/ConfirmedPage";

const paymentRoute = [
  { id: 0, path: "/", component: Home },
  { id: 1, path: "/checkout/:client_secret/:ran_number", component: Payments },
  { id: 2, path: "/order_confirmation", component: ConfirmedPaymentPage },
  { id: 3, path: "/error_confirmation", component: ErrorPaymentPage },
];

export default paymentRoute;
