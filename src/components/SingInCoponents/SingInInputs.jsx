import React, { useState } from "react";
import "./SingInInputs.css";
import passwordicon from "../Icons/password.svg";
import user from "../Icons/user.svg";
import email from "../Icons/email.svg";
import x from "../Icons/x.svg";
import google from "../Icons/google.svg";
import axios from "axios";
function SingInInputs() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response =await axios.post("http://localhost:5000/api/v1/users/signup", data, {
        withCredentials: true,
      });

      // Handle successful login response
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };
  return (
    <div className="input-singin">
      <form onSubmit={handleSubmit}>
        <div className="singin-title">
          <h1>Sign Up</h1>
        </div>
        <div className="input-box">
          <input type="text" required className="user" name="name" />
          <label className="user">Full name</label>
          <img src={user} alt="" className="user" />
        </div>
        <div className="input-box">
          <input type="email" required className="email" name="email" />
          <label className="email">Email</label>
          <img src={email} alt="" className="email" />
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
            className="conferm"
            name="passwordConfirm"
          />
          <label className="conferm">Conferm the password</label>
          <img src={passwordicon} alt="" className="conferm" />
        </div>
        <button className="btn-singin" type="submit">
          Sign up
        </button>
        <div className="accept-terms">
          <p className="by">By registring you accept</p>
          <p className="trems">Terms of Service</p>
        </div>
        <div className="google-or-x">
          <button>
            <img src={google} alt="" className="google" />
          </button>
          <button>
            <img src={x} alt="" className="x" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SingInInputs;
