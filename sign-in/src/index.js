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
      name: "",
      tab: ""
    };
  }
  ChangeOfMessage = event => {
    this.setState({ valueOfMessage: event.target.value });
  };
  Send = () => {
    this.setState({ show: this.state.valueOfMessage });
  };
  newChat = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  tabs = event => {
    console.log(event.target.id);
    this.setState({ tab: event.target.id });
  };
  render() {
    console.log(this.state.valueOfMessage);
    console.log(this.state.time);
    console.log();
    return (
      <div>
        <button id={1} onClick={this.tabs}>
          tab1
        </button>
        <button id={2} onClick={this.tabs}>
          tab2
        </button>
        <button id={3} onClick={this.tabs}>
          tab3
        </button>
        <button id={4} onClick={this.tabs}>
          tab4
        </button>
        <p>{this.state.tab}</p>
      </div>
      // <div className="messenger">
      //   <div className="chats">
      //     <div className="search">
      //       <Input placeholder="search" />
      //       <hr />
      //       <div className="chat_user">
      //         <p onClick={this.newChat} value="Ilya">
      //           Ilya
      //         </p>
      //       </div>
      //       <hr />
      //       <div className="chat_user">
      //         <p onClick={this.newChat} value="Eldar">
      //           Eldar
      //         </p>
      //       </div>
      //       <hr />
      //       <div className="chat_user">
      //         <p onClick={this.newChat} value="Движ Париж">
      //           Движ Париж
      //         </p>
      //       </div>
      //       <hr />
      //       <div className="chat_user">
      //         <p onClick={this.newChat} value="Family">
      //           Family
      //         </p>
      //       </div>
      //       <hr />
      //     </div>
      //   </div>
      //   <div className="chat">
      //     <div className="name_of_chat">
      //       <p>{this.state.name}</p>
      //       <hr />
      //     </div>
      //     <p>{this.state.time}</p>
      //     <p>{this.state.show}</p>
      //     <div className="message">
      //       <hr />
      //       <input
      //         placeholder="Write a message..."
      //         value={this.state.valueOfMessage}
      //         onChange={this.ChangeOfMessage}
      //       />
      //       <Button onClick={this.Send} className="send">
      //         Send
      //       </Button>
      //     </div>
      // </div>
      //</div>
    );
  }
}
ReactDOM.render(<Chat_rbx />, document.getElementById("root"));
