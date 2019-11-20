import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Topbar from "./Topbar";
import Integration from "./Integration";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" exact component={LandingPage} />
        <Route path="/integration" exact component={Integration} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </div>
    );
  }
}
//Export The Main Component
export default Main;
