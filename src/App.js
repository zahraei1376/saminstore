import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// //////////////////////////////////////
import MySpinner from "./components/spinner/spinner.component";
// //////////////////////////////////////
const HomePage = lazy(() => import("./pages/home/home.component"));
const ShowProduct = lazy(() =>
  import("./pages/showProduct/showProduct.component")
);
const NotFoundPage = lazy(() => import("./pages/notFound/notFound.component"));
const LoginRegisterPage = lazy(() =>
  import("./pages/login-register/login-register.component")
);
const CheckOutPage = lazy(() =>
  import("./pages/checkout/checkout.component")
);
// /////////////////////////////////////////////////////
const Layout = () => (
  <Router>
    <Switch>
      <Suspense fallback={<MySpinner />}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/showProduct/:id" component={ShowProduct} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route exact path="/register">
          <LoginRegisterPage
            type="register"
            url="https://fakestoreapi.com/users"
          />
        </Route>
        <Route exact path="/login">
          <LoginRegisterPage
            type="login"
            url="https://fakestoreapi.com/auth/login"
          />
        </Route>
        <Route path="*" component={NotFoundPage} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Suspense>
    </Switch>
  </Router>
);
export default Layout;
