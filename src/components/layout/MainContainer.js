import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Landing from "./Landing";
import Market from "./Market";
import Basket from "../products/Basket";
import Login from "../user/Login";
import Order from "../shopping/Order";
import Profile from "../user/Profile";
import Register from "../user/Register";
import Checkout from "../shopping/Checkout";
import Product from "../products/Product";

const MainContainer = () => (
  <Fragment>
    <Route path="/" exact component={Landing} />
    <Route path="/market" exact component={Market} />
    <Route path="/report" exact component={Basket} />
    <Route path="/login" exact component={Login} />
    <Route path="/shopping" exact component={Order} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/register" exact component={Register} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/checkout" exact component={Checkout} />
    <Route path="/product" exact component={Product} />
  </Fragment>
);

export default MainContainer;
