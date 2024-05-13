import React, { useState } from "react";
import "./changePassword.css";
import tickIcon from '../Icons/tickmark.svg'
import passwordicon from "../Icons/password.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const [passwordChanged, setPasswordChanged] = useState(false);
  const { resetToken } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/resetPassword/${resetToken}`,
        data,
        { withCredentials: true }
      );
      setPasswordChanged(true);
    } catch (error) {
      // Handle login error
      console.error("Error changing the password:", error);
    }
  };
  return (
    passwordChanged ? (
      <div className="success-message">
        <img src={tickIcon} alt="Success" />
        <p>Password has been successfully changed!</p>
      </div>
    ) : (
      <div className="input-changePassword">
        <form onSubmit={handleSubmit}>
          <div className="changePassword-title">
            <h1>Enter your new password</h1>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              className="password"
              name="password"
            />
            <label className="password">Password</label>
            <img src={passwordicon} alt="" className="password" />
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              className="confirm"
              name="passwordConfirm"
            />
            <label className="confirm">Confirm the password</label>
            <img src={passwordicon} alt="" className="confirm" />
          </div>
          <button className="btn-changePassword" type="submit">
            Change password
          </button>
        </form>
      </div>
    )
  );
}
export default ChangePassword;
