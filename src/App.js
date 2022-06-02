import "./App.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// //////////////////////////////////////
import MySpinner from "./components/spinner/spinner.componenr";
// //////////////////////////////////////
const HomePage = lazy(() => import("./pages/home/home.component"));
const ShowProduct = lazy(() =>
  import("./pages/showProduct/showProduct.component")
);
const NotFoundPage = lazy(() => import("./pages/notFound/notFound.component"));
const LoginPage = lazy(() => import("./pages/login/login.component"));
// /////////////////////////////////////////////////////
const Layout = () => (
  <Router>
    <Switch>
      <Suspense fallback={<MySpinner />}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/showProduct/:id" component={ShowProduct} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Suspense>
    </Switch>
  </Router>
);
export default Layout;
