import React from "react";
import "./Switch.css";

function Switch({ logIn, sginUp, onLogInChange, onSignUpChange }) {
  return (
    <div className="form-box">
      <div className="button-box">
        <div className={`btn ${logIn ? "left" : "right"}`}></div>
        <button
          onClick={onLogInChange}
          className={`toggle-btn ${logIn ? "login-left" : "login-right"}`}
        >
          Log In
        </button>
        <button
          onClick={onSignUpChange}
          className={`toggle-btn ${!sginUp ? "sginup-left" : "sginup-right"}`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Switch;
