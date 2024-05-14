import React, { useState } from "react";
import "./LogIn.css";
import LogInInput from "./LogInInput/LogInInput";
import ChangePassword from "./changePassword/ChangePassword";

function ResetPassword({ onHomeChange }) {
  return (
    <div className="login-form">
      <ChangePassword />
    </div>
  );
}

export default ResetPassword;
