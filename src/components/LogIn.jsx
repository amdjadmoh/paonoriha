import React, { useState } from "react";
import "./LogIn.css";
import LogInInput from "./LogInInput/LogInInput";
import ForgotPasswordInput from "./forgotPasswordInput/forgotPasswordInput";

function LogIn({ onError, onHomeChange, onSuccess }) {
  // Initialize the state for the checkbox
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <div className="login-form">
      {!forgotPassword ? (
        <LogInInput
          onForgotPassword={handleForgotPassword}
          onHomeChange={onHomeChange}
          onError={onError}
        />
      ) : (
        <ForgotPasswordInput onError={onError} onSuccess={onSuccess} />
      )}
    </div>
  );
}

export default LogIn;
