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

import "mdbreact/dist/css/mdb.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
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
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    //value=" "
                    //onChange={this.handleChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                  </Form.Text>
                </Form.Group>
                <br></br>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    //value={this.state.password}
                    //onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <br></br>

                <Button
                  variant="light"
                  style={btn}
                  //onClick={this.handleLogin}
                >
                  Submit
                </Button>
              </Form>

              <br />
              <p style={para}>
                New to Feed-Me-Back? <a href="./signup">Signup</a>
              </p>
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
