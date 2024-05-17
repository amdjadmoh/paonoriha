import React, { useState } from "react";
import "./SingInInputs.css";
import passwordicon from "../Icons/password.svg";
import user from "../Icons/user.svg";
import emailicon from "../Icons/email.svg";
import x from "../Icons/x.svg";
import google from "../Icons/google.svg";
import axios from "axios";
function SingInInputs({ onError }) {
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/signup",
        data,
        {
          withCredentials: true,
        }
      );

      // Handle successful login response
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      onError(error.response.data.message);
    }
  };
  return (
    <div className="input-singin">
      <form onSubmit={handleSubmit}>
        <div className="singin-title">
          <h1 className="sginup">Sign Up</h1>
        </div>
        <div className="input-box-signup">
          <input type="text" required className="SignUpUser" name="name" />
          <label className="SignUpUser">Full name</label>
          <img src={user} alt="" className="SignUpUser" />
        </div>
        <div className="input-box-signup">
          <input
            type="email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`SignupEmail ${email ? "SignUpEmail-has-value" : ""}`}
          />
      <label className={`SignupEmail ${email ? 'SignUpEmail-has-value' : ''}`}>Email</label>
          <img src={emailicon} alt="" className="SignupEmail" />
        </div>
        <div className="input-box-signup">
          <input
            type="password"
            required
            className="SignUpPassword"
            name="password"
          />
          <label className="SignUpPassword">Password</label>
          <img src={passwordicon} alt="" className="SignUpPassword" />
        </div>
        <div className="input-box-signup">
          <input
            type="password"
            required
            className="SignUpPasswordconfirm"
            name="passwordConfirm"
          />
          <label className="SignUpPasswordconfirm">Confirm the password</label>
          <img src={passwordicon} alt="" className="SignUpPasswordconfirm" />
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
