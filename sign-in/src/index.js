import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Sign_in from "./components/Sign_in";
// import "./style.css";
import "./rbx.css";
import { Input } from "rbx";
import { Button } from "rbx";

class Login_rbx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfMessage: "",
      time: new Date().toString(),
      show: ""
    };
  }
  ChangeOfMessage = event => {
    this.setState({ valueOfMessage: event.target.value });
  };
  Send = () => {
    this.setState({ show: this.state.valueOfMessage });
  };
  render() {
    console.log(this.state.valueOfMessage);
    console.log(this.state.time);
    return (
      <div className="messenger">
        <div className="chats">
          <div className="search">
            <Input placeholder="search" />
            <hr />
            <div className="chat_user">
              <p>Ilya</p>
            </div>
            <hr />
            <div className="chat_user">
              <p>Eldar</p>
            </div>
            <hr />
            <div className="chat_user">
              <p>Движ Париж</p>
            </div>
            <hr />
            <div className="chat_user">
              <p>Family</p>
            </div>
            <hr />
          </div>
        </div>
        <div className="chat">
          <div className="name_of_chat">
            <p>Ilya</p>
            <hr />
          </div>
          <p>{this.state.time}</p>
          <p>{this.state.show}</p>
          <div className="message">
            <hr />
            <input
              placeholder="Write a message..."
              value={this.state.valueOfMessage}
              onChange={this.ChangeOfMessage}
            />
            <Button onClick={this.Send} className="send">
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Login_rbx />, document.getElementById("root"));
