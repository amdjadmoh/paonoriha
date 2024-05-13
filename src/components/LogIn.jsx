import React, { useState } from "react";
import "./LogIn.css";
import LogInInput from "./LogInInput/LogInInput";

import home from "./Icons/home.svg";

function LogIn() {
  // Initialize the state for the checkbox
  return (
      <div className="login-form">
        <LogInInput />
      </div>
  );
}

export default LogIn;
