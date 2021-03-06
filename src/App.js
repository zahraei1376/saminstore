import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// //////////////////////////////////////
import MySpinner from "./components/spinner/spinner.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// //////////////////////////////////////
const HomePage = lazy(() => import("./pages/home/home.component"));
const ShowProduct = lazy(() =>
  import("./pages/showProduct/showProduct.component")
);
const NotFoundPage = lazy(() => import("./pages/notFound/notFound.component"));
const LoginRegisterPage = lazy(() =>
  import("./pages/login-register/login-register.component")
);
const CheckOutPage = lazy(() => import("./pages/checkout/checkout.component"));
// const CompletePurchaseProcess = lazy(() =>
//   import("./pages/completePurchaseProcess/completePurchaseProcess.component")
// );
////////////////////////////////////////////////////////
const Layout = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<MySpinner />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/showProduct/:id" component={ShowProduct} />
          <Route exact path="/checkout">
            {!currentUser ? <Redirect to="/login" /> : <CheckOutPage />}
          </Route>
          <Route exact path="/register">
            {currentUser ? (
              <Redirect to="/login" />
            ) : (
              <LoginRegisterPage type="register" url="/users" />
            )}
          </Route>
          <Route exact path="/login">
            <LoginRegisterPage
              type="login"
              url="/auth/login"
            />
          </Route>
          {/* <Route component={NotFoundPage} /> */}
          {/* <Route path="*" component={NotFoundPage} /> */}
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Layout);
