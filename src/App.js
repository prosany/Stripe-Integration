import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import paymentRoute from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {paymentRoute.map((route, idx) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default React.memo(App);
