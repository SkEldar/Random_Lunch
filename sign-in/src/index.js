import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Sign_in from "./components/Sign_in";
// import "./style.css";
import "./rbx.css";
import { Input } from "rbx";
import { Button } from "rbx";

class Chat_rbx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfMessage: "",
      time: new Date().toString(),
      show: "",
      show2: "",
      show3: "",
      show4: "",
      name: "",
      tab: ""
    };
  }
  ChangeOfMessage = event => {
    this.setState({ valueOfMessage: event.target.value });
  };
  // Send = () => {
  //   this.setState({ show: this.state.valueOfMessage });
  //   console.log(1);
  // };
  newChat = event => {
    console.log(event.target.id);
    this.setState({ name: event.target.id });
    if (event.target.id === "Ilya") {
      this.setState({ show: this.state.valueOfMessage });
      this.setState({ tab: this.state.show });
      console.log(1);
    } else if (event.target.id === "Eldar") {
      this.setState({ show2: this.state.valueOfMessage });
      this.setState({ tab: this.state.show2 });
      console.log(2);
    } else if (event.target.id === "Family") {
      this.setState({ show3: this.state.valueOfMessage });
      this.setState({ tab: this.state.show3 });
      console.log(4);
    } else if (event.target.id === "Движ Париж") {
      this.setState({ show4: this.state.valueOfMessage });
      this.setState({ tab: this.state.show4 });
      console.log(3);
    }
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
              <p onClick={this.newChat} id="Ilya">
                Ilya
              </p>
            </div>
            <hr />
            <div className="chat_user">
              <p onClick={this.newChat} id="Eldar">
                Eldar
              </p>
            </div>
            <hr />
            <div className="chat_user">
              <p onClick={this.newChat} id="Движ Париж">
                Движ Париж
              </p>
            </div>
            <hr />
            <div className="chat_user">
              <p onClick={this.newChat} id="Family">
                Family
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="chat">
          <div className="name_of_chat">
            <p>{this.state.name}</p>
            <hr />
          </div>
          <p>{this.state.time}</p>
          <p>{this.state.tab}</p>
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
ReactDOM.render(<Chat_rbx />, document.getElementById("root"));
