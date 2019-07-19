import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Sign_in from "./components/Sign_in";
//import "./style.css";
import "./rbx.css";
import { Input } from "rbx";
import { Button } from "rbx";

class Chat_rbx extends Component {
  constructor(props) {
    super(props);
    // у каждого чата есть свой массив в котором хранятся сообщения
    this.state = {
      valueOfMessage: "",
      time: new Date().toString(),
      show: [],
      show2: [],
      show3: [],
      show4: [],
      currentChat: "show",
      name: "",
      tab: ""
    };
  }
  ChangeOfMessage = event => {
    this.setState({ valueOfMessage: event.target.value });
  };

  // вот здесь самая главная часть нашей логики
  // мы отправляем сообщение в ОПРЕДЕЛЕННУЮ часть от state
  // и стираем сообщение после отправки
  Send = () => {
    let newState = this.state[this.state.currentChat];
    newState.push(this.state.valueOfMessage);
    this.setState({ show: newState, valueOfMessage: "" });
    console.log(1);
  };

  newChat = event => {
    console.log(event.target.id);
    // когда переключаем чат то обнуляем строку сообщения
    // и даем ему емя
    this.setState({ valueOfMessage: "", name: event.target.id });

    // здесь мы просто переключаем окно
    if (event.target.id === "Ilya") {
      this.setState({ currentChat: "show" });
      console.log(1);
    } else if (event.target.id === "Eldar") {
      this.setState({ currentChat: "show2" });
      console.log(2);
    } else if (event.target.id === "Family") {
      this.setState({ currentChat: "show3" });
      console.log(4);
    } else if (event.target.id === "Движ Париж") {
      this.setState({ currentChat: "show4" });
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
              <div
                onClick={this.newChat}
                id="Ilya"
                style={{ cursor: "pointer" }}
              >
                Ilya
              </div>
            </div>
            <hr />
            <div className="chat_user">
              <div
                onClick={this.newChat}
                id="Eldar"
                style={{ cursor: "pointer" }}
              >
                Eldar
              </div>
            </div>
            <hr />
            <div className="chat_user">
              <div
                onClick={this.newChat}
                id="Движ Париж"
                style={{ cursor: "pointer" }}
              >
                Движ Париж
              </div>
            </div>
            <hr />
            <div className="chat_user">
              <div
                onClick={this.newChat}
                id="Family"
                style={{ cursor: "pointer" }}
              >
                Family
              </div>
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
          {/**

          */}
          {this.state[this.state.currentChat].map(message => (
            <p key={message}>{message}</p>
          ))}
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
