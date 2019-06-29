import React, { Component } from "react";

class Sign_in extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfLogin: "",
      valueOfPassword: "",
      resBack: ""
    };
  }
  handleChangeOfLogin = event => {
    this.setState({ valueOfLogin: event.target.value });
  };
  handleChangeOfPassword = event => {
    this.setState({ valueOfPassword: event.target.value });
  };
  Req = () => {
    var url = "http://localhost:3012/api/sign_in";
    console.log(1);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login: this.state.valueOfLogin,
        password: this.state.valueOfPassword
      })
    })
      .then(function(res) {
        console.log(res.json());
        return res.json();
      })
      .then(function(data) {
        this.setState({ resBack: data.text });
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  };
  render() {
    console.log(this.state.valueOfLogin);
    console.log(this.state.valueOfPassword);
    console.log(this.state.resBack);
    return (
      <div className="background">
        <div className="sign_in">
          <h1>Sign in</h1>
          <input
            className="info"
            value={this.state.valueOfLogin}
            type="text"
            placeholder="Login"
            onChange={this.handleChangeOfLogin}
          />
          <input
            className="info"
            value={this.state.valueOfPassword}
            onChange={this.handleChangeOfPassword}
            type="password"
            placeholder="password"
          />

          <button className="get_into" onClick={this.Req}>
            Sign in
          </button>
          <a href="#">
            <p>don't remember the password?</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Sign_in;
