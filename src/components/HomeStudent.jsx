import React, { useState, Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import NavBar from "./leftbar";
import Button from "react-bootstrap/Button";
import { Route } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

class HomeStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      company: "IBM",
      pname: "Hiring Manager",
      report: "",
      status: "awaited",
      date: new Date(),
      startDate: new Date(),
      selectedFile: null
    };
    this.handleSchedule = this.handleSchedule.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.printResponse = this.printResponse.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    console.log("component did mount");
    let email = this.state.email;
    console.log("email is..", email);
    let data = {
      email: email
    };
    let url = "http://localhost:3001/api/feedback/getCandidate";
    /*axios
      .get(url, data)
      .then(response => {
        console.log("response is..........", response.data);
        this.setState({
          company:reponse.data.company,
          pname:response.data.pname,
          status:response.data.status,
          report:response.data.report
        });
      })
      .catch(err => console.log(err));*/
  }
  setStartDate = date => {
    this.setState({
      date: date
    });
  };
  handleSchedule = () => {
    //console.log("date is ", this.state.date);
    let date = this.state.date;
    let email = localStorage.getItem("email");
    //console.log("file is is ", this.state.selectedFile);
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    //console.log("data is..", data);
    let temp = {
      email: email,
      date: date,
      data: data
    };
    console.log("sending....", temp);
    let url = "http://localhost:3001/api/feedback/schedule";
    axios
      .get(url, temp)
      .then(response => {
        console.log("response is ", response.data);
        swal("Successfully Uploaded!", "", "success");
      })
      .catch(err => console.log(err));
  };
  onChangeHandler = event => {
    //console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  printResponse(status) {
    //const [startDate] = useState(null);
    if (status == "awaited" || status == "pending") {
      return (
        <Table bordered>
          <tr>
            <td style={item}>Your Status : {status}</td>
          </tr>
          <tr>
            <td style={item}>Company Name : {this.state.company}</td>
          </tr>
          <tr>
            <td style={item}>Position : {this.state.pname}</td>
          </tr>
          <tr>
            {" "}
            <td style={item}>
              Schedule Date :
              <DatePicker
                selected={this.state.startDate}
                onChange={date => this.setStartDate(date)}
                minDate={new Date()}
                showDisabledMonthNavigation
              />
            </td>
          </tr>

          <tr>
            <td style={item}>
              Upload Resume :<br />
              <input
                type="file"
                style={item}
                name="file"
                onChange={this.onChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="light" style={btn} onClick={this.handleSchedule}>
                Schedule Interview
              </Button>
            </td>
          </tr>
        </Table>
      );
    } else {
      return (
        <td width="200" style={item1}>
          hii {status}
        </td>
      );
    }
    //<th key={d.item_id}>{d.price}</th>;
  }
  render() {
    let response = {
      name: "Kanika Khanna",
      status: "awaited",
      company: "IBM"
    };
    let display;

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
            <td width="400"></td>
            <td style={para} width="700">
              {this.printResponse(response.status)}
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
export default HomeStudent;
