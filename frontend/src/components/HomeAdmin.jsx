import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import NavBar from "./leftbar";
import Button from "react-bootstrap/Button";
import { Route } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      company: localStorage.getItem("company"),
      positions: []
    };
  }
  componentDidMount() {
    console.log("component did mount");
    let email = this.state.email;
    console.log("email is..", email);
    let data = {
      email: email
    };
    let url = "http://localhost:3001/api/feedback/getPositionDetails";
    /* axios
      .get(url, data)
      .then(response => {
        console.log("response is..........", response.data);
        this.setState({
          positions: this.state.positions.concat(response.data)
        });
      })
      .catch(err => console.log(err));*/
  }

  printSkills(skills) {
    return skills.map(d => {
      return (
        <td width="100" style={item1}>
          {d}
        </td>
      );
      //<th key={d.item_id}>{d.price}</th>;
    });
  }

  render() {
    let response = {
      positions: [
        {
          pname: "Hiring manager",
          desc: "Hii i am a manager",
          skills: ["c", "c++"],
          jobid: "123"
        },
        {
          pname: "Hiring manager1",
          desc: "Hii i am a new manager",
          skills: ["c", "c++", "python"],
          jobid: "1234"
        }
      ]
    };
    let details_positions = response.positions.map(positions => {
      return (
        <Table bordered width="900">
          <tr>
            <td width="80%" class="font-weight-bold" style={item}>
              Position Name: {positions.pname}
            </td>
          </tr>
          <tr>
            <td width="900" class="font-weight-bold" style={item1}>
              Position Description: {positions.desc}
            </td>
          </tr>
          <tr>
            <td style={item1}>Skills:</td>
            {this.printSkills(positions.skills)}
          </tr>

          <tr>
            <td width="900" style={item1}>
              Job ID: {positions.jobid}
            </td>
          </tr>
          <tr>
            <td width="900" style={item1}>
              <Link
                to={{
                  pathname: "/viewcandidates",
                  state: { result: positions }
                }}
              >
                <Button
                  variant="light"
                  style={btn}
                  id={positions.jobid}
                  //onClick={this.handleUpdate}
                >
                  Get Candidates
                </Button>
              </Link>
            </td>
          </tr>
        </Table>
      );
    });
    let redirectVar = null;
    /* if (localStorage.getItem("name") == null) {
          redirectVar = <Redirect to="/" />;
        }*/
    return (
      <div>
        {redirectVar}
        <NavBar />
        <br />
        <br />
        <br />
        <br />

        <Table borderless>
          <tr>
            <td>
              <ListGroup variant="flush" style={group}>
                <ListGroup.Item action href="./homeAdmin">
                  <p style={para}> Home </p>
                </ListGroup.Item>
                <ListGroup.Item action href="./scheduleInterview">
                  <p style={para}> Schedule Interview </p>
                </ListGroup.Item>
                <ListGroup.Item action href="./assignInterview">
                  <p style={para}> Assign Interview </p>
                </ListGroup.Item>
              </ListGroup>
            </td>
            <td style={para} width="700">
              {details_positions}
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}
const group = {
  width: 320,
  height: 700
};
const btn = {
  color: "#bd0d39",

  fontFamily: "Arial, Helvetica, sans-serif",
  fontStyle: "normal"
};
const para = {
  fontfamily: "Arial, Helvetica, sans-serif",

  fontSize: 30,
  textAlign: "center",

  padding: 10,

  margin: 10,
  display: "inline-block",
  verticalAllign: "middle"
};
const item = {
  textAlign: "left",
  fontSize: 25,
  fontfamily: "Arial, Helvetica, sans-serif"
};
const item1 = {
  textAlign: "left",
  fontSize: 18,
  fontfamily: "Arial, Helvetica, sans-serif"
};
export default HomeAdmin;
