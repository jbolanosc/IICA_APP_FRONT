import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import MainContainer from "./layout/MainContainer";

import "./Root.css";

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Navbar />
          <MainContainer />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
