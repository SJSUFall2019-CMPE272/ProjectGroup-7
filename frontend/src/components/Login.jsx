import React, { Component } from "react";
import FontAwesome from 'react-fontawesome'
import Dropdown from './DropDown.jsx'
import Table from "react-bootstrap/Table";
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
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleLogin from 'react-google-login';
import "mdbreact/dist/css/mdb.css";

let p = "";
class Login extends Component {
  constructor(props) {
    super(props);
    p = props;
    this.state = {
      
    listOpen: false,
    title : "",
    headerTitle: this.props.title,
    company: "",
      collapse: false,
      isSignedIn: false,
      role: [
          {
              id: 0,
              title: 'Admin',
              selected: false,
              key: 'role'
          },
          {
            id: 1,
            title: 'Interviewer',
            selected: false,
            key: 'role'
          },
          {
            id: 2,
            title: 'Candidate',
            selected: false,
            key: 'role'
          }
        ],
      gender: [
          {
              id: 0,
              title: 'Male',
              selected: false,
              key: 'gender'
          },
          {
            id: 1,
            title: 'Female',
            selected: false,
            key: 'gender'
          }
        ],
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

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  login(response) {
    console.log("Google Response: "+JSON.stringify(response));
    console.log(localStorage.getItem('company'));
    console.log("Gender: "+localStorage.getItem('gender'));
    console.log(response);
    let data = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      usertype: this.state.title,
      company: localStorage.getItem('company'),
      gender: localStorage.getItem('gender')
    }
    let url = "http://localhost:3001/api/feedback/login";
     /*axios
      .get(url, data)
      .then(response => {
        console.log("response is..........", response.data);
        localStorage.setItem("name":data.name);
        localStorage.setItem("email":data.email);
        localStorage.setItem("company":data.company);
        localStorage.setItem("company":data.usertype);
        if(data.usertype == "admin")
          this.p.history.push("/homeAdmin");
        else if(data.usertype == "interviewer")
          this.p.history.push("/homeInterviewer");
        else if(data.usertype == "candidate")
          this.p.history.push("/homeStudent");
      })
      .catch(err => console.log(err));*/
      if(data.usertype == "Admin")
          p.history.push("/homeAdmin");
        else if(data.usertype == "Interviewer")
          p.history.push("/homeInterviewer");
        else if(data.usertype == "Candidate")
          p.history.push("/homeStudent");
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp,
      title: temp[id].title
    });
  }

  resetGender = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp,
      title: temp[id].title
    });
  }

  handleChange = (name) => {
    this.setState({
      gender: name.target.value
    });
    localStorage.setItem('gender',name.target.value);
  }

  render() {
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    const responseGoogle = (response) => {
      if(!response.error)
      this.login(response)
    }
    const bgPink = { backgroundColor: "#e91e63" };
    const container = { height: 1300 };
      
    let drop = '';
    if(this.state.title == "Admin")
      drop = true;
    else
      drop = false;
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
            <td style={{background:"#f9f9f9",padding:"10px"}}>
              <h3 style={{fontSize:"1.10rem"}}>Log In to schedule an interview and get feedbacks</h3>
              <form>
                <Dropdown
                  title="Login as"
                  list={this.state.role}
                  resetThenSet={this.resetThenSet}
                />

                {drop ? <Results /> : null}

                // <Dropdown
                //   title="Select Gender"
                //   list={this.state.gender}
                //   resetThenSet={this.resetGender}
                // />

                <div className="App">
                  <GoogleLogin
                    clientId="873380339585-lp7se9eau76buen9oa0787e285tpr42k.apps.googleusercontent.com"
                    scope="https://www.googleapis.com/auth/userinfo.profile"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                </div>
                
              </form>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  
  
}
class Results extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      company : ""
    }
  }

    render() {
        const list = this.props
        return (
            <div className="company"><input type="text" value={this.state.company} placeholder="Company" type="text" name="company" onChange={this.handleChange} noValidate/> </div>
        );
    }

    handleChange = (name) => {
      this.setState({
        company: name.target.value
      });
      localStorage.setItem('company',name.target.value);
    }
};

export default Login;