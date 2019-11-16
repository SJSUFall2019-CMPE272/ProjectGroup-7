import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Topbar from "./Topbar";

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" exact component={LandingPage} />
      </div>
    );
  }
}
//Export The Main Component
export default Main;
