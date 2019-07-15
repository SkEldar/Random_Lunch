import "rbx/index.css";
import React, { Component } from "react";
import { Input } from "rbx";
import { Button } from "rbx";

class Login_rbx extends Component {
  render() {
    return (
      <div>
        <div className="search" />
        <div className="chat" />
      </div>
    );
  }
}
ReactDOM.render(<Login_rbx />, document.getElementById("root"));
