import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LogInInput.css";
import passwordicon from "../Icons/password.svg";
import usericon from "../Icons/user.svg";
import google from "../Icons/google.svg";
import x from "../Icons/x.svg";

function LogInInput({ onForgotPassword, onHomeChange, onError }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   // Check if there's a remember token in local storage or cookies
  //   const rememberToken = localStorage.getItem("rememberToken");
  //   if (rememberToken) {
  //     // Perform automatic login using the token
  //     // You might want to make a request to your backend here
  //     console.log("Automatic login with remember token:", rememberToken);
  //   }
  // }, []);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        data,
        { withCredentials: true }
      );
      // Handle successful login response
      console.log("Login successful:", response.data.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      window.location.reload();
    } catch (error) {
      onError(error.response.data.message);
    }
  };

  return (
    <div className="input-login">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="input-box">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className={`loginEmail ${email ? "loginEmail-has-value" : ""}`}
            name="email"
          />
      <label className={`loginEmail ${email ? 'loginEmail-has-value' : ''}`}>Email</label>
          <img src={usericon} alt="" className="loginEmail" />
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            className="password-login"
            name="password"
          />
          <label className="password-login">Password</label>
          <img src={passwordicon} alt="" className="password-login" />
          <span className="password-login" onClick={onForgotPassword}>
             Forgot password
          </span>
        </div>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe" className="check">
            Remember me
          </label>
          <button className="btn-login" type="submit">
            Login
          </button>
          <p className="or">or</p>
          <div className="google-or-x-login">
            <button>
              <img src={google} alt="" className="google" />
            </button>
            <button>
              <img src={x} alt="" className="x" />
            </button>
          </div>
          <p className="go-to-singin">I don't have an account yet</p>
        </div>
      </form>
    </div>
  );
}

export default LogInInput;
