import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleLogin from 'react-google-login';
import "mdbreact/dist/css/mdb.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [
      {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
      },
      {
        id: 3,
        title: 'Istanbul',
        selected: false,
        key: 'location'
      },
      {
        id: 4,
        title: 'Izmir',
        selected: false,
        key: 'location'
      },
      {
        id: 5,
        title: 'Oslo',
        selected: false,
        key: 'location'
      }
    ],
      collapse: false,
      isSignedIn: false,

    };
    this.onClick = this.onClick.bind(this);

  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  onSuccess() {
  this.setState({
    isSignedIn: true
  })
}
  render() {
    const responseGoogle = (response) => {
      console.log("Google Response: "+JSON.stringify(response));
    }
    const bgPink = { backgroundColor: "#e91e63" };
    const container = { height: 1300 };
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Feed-Me-Back</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./integration">Integration</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>

        <table>
          <tr>
            <td>
              <img
                src={require("./login1.jpg")}
                width={1000}
                class="rounded"
                alt="avatar"
              />
            </td>
            <td>
              <div className="dd-wrapper">
                <div className="dd-header">
                  <div className="dd-header-title"></div>
                </div>
                <ul className="dd-list">
                  <li className="dd-list-item">Admin</li>
                  <li className="dd-list-item">Interviewer</li>
                  <li className="dd-list-item">Candidate</li>
                </ul>
              </div>
              <div className="App">
                <h1>LOGIN WITH GOOGLE</h1>
                <GoogleLogin
                  clientId="873380339585-lp7se9eau76buen9oa0787e285tpr42k.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
const para = {
  fontfamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
};
const btn = {
  color: "#bd0d39",

  fontFamily: "Arial, Helvetica, sans-serif",
  fontStyle: "normal"
};
export default Login;
