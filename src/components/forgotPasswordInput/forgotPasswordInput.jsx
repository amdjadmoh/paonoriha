import React, { useState } from "react";
import axios from "axios";
import "./forgotPasswordInput.css";
import emailicon from "../Icons/email.svg";

function ForgotPasswordInput({ onSuccess, onError }) {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/forgotPassword",
        data,
        { withCredentials: true }
      );
      setEmailSent(true);
      onSuccess("An Email with password reset link has been sent!");
    } catch (error) {
      // Handle login error
      console.error("Sending email error:", error);
      onError(error.response.data.message);
    }
  };
  return (
    <div className="input-forgotPassword">
      <form onSubmit={handleSubmit}>
        <div className="forgotPassword-box">
          <input
            type="email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`ForgotPasswordemail ${email ? "ForgotPasswordemail-has-value" : ""}`}
          />
      <label className={`ForgotPasswordemail ${email ? 'ForgotPasswordemail-has-value' : ''}`}>Email</label>
          <img src={emailicon} alt="" className="ForgotPasswordemail" />
        </div>
        <div className="sendLink">
          <button className="btn-sendLink" type="submit">
            Send the reset link
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordInput;
