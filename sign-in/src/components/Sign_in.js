import React from "react";

function Sign_in() {
  return (
    <div className="background">
      <div className="sign_in">
        <h1>Sign in</h1>
        <input className="info" type="text" placeholder="Login" />
        <input className="info" type="password" placeholder="password" />
        <button className="get_into">Sign in</button>
        <a href="#">
          <p>don't remember the password?</p>
        </a>
      </div>
    </div>
  );
}

export default Sign_in;
