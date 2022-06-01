import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// //////////////////////////////////////
// import MySpinner from '../MySpinner/MySpinner.component';
// //////////////////////////////////////
const HomePage = lazy(() => import('./pages/home/home.component'));
const ShowProduct = lazy(() => import('./pages/showProduct/showProduct.component'));
const NotFoundPage = lazy(() => import('./pages/notFound/notFound.component'));
// /////////////////////////////////////////////////////
const Layout = () => (
      <Switch>
        <Suspense fallback={<h1>gggggg</h1>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/showProduct/:id" component={ShowProduct} />
          {/* <Route path="*" component={NotFoundPage} /> */}
        </Suspense>
      </Switch>
);
export default Layout;

