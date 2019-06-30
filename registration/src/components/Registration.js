import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfNickname: "",
      valueOfPassword: "",
      valueOfEmail: ""
    };
  }
  handleChangeOfNickname = event => {
    this.setState({ valueOfNickname: event.target.value });
  };
  handleChangeOfEmail = event => {
    this.setState({ valueOfEmail: event.target.value });
  };
  handleChangeOfPassword = event => {
    this.setState({ valueOfPassword: event.target.value });
  };
  Req = () => {
    var url = "http://localhost:3012/api/register";
    console.log(1);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Nickname: this.state.valueOfNickname,
        password: this.state.valueOfPassword,
        Email: this.state.valueOfEmail
      })
    })
      .then(res => {
        return res.json();
      })
      .catch(error => {
        console.log("Request failure: ", error);
      });
  };
  render() {
    console.log(this.state.valueOfNickname);
    console.log(this.state.valueOfEmail);
    console.log(this.state.valueOfPassword);
    return (
      <div className="background">
        <div className="registration">
          <h1>Registration</h1>
          <input
            onChange={this.handleChangeOfNickname}
            value={this.state.valueOfNickname}
            className="infos"
            type="text"
            placeholder="Your Nickname"
          />
          <input
            onChange={this.handleChangeOfEmail}
            value={this.state.valueOfEmail}
            className="infos"
            type="email"
            placeholder="Your email"
          />
          <input
            onChange={this.handleChangeOfPassword}
            value={this.state.valueOfPassword}
            className="infos"
            type="password"
            placeholder="Password"
          />
          <button onClick={this.Req}>Registration</button>
        </div>
      </div>
    );
  }
}

export default Registration;
