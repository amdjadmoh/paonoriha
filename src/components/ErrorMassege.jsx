import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ErrorMassege.css";
import cancel1 from "./Icons/cancel.svg";
import cancel2 from "./Icons/cancel2.svg";
import errormasseg from "./Icons/errormassege.svg";
function ErrorMassege({ message, setHasError }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeMessage();
    }, 2000); // Close the message after 3 seconds

    return () => clearTimeout(timer); // Clean up timer
  }, [message]);
  const closeMessage = () => {
    const error = document.querySelector(".ErrorMassege");
    error.classList.remove("appear");
    error.classList.add("disappear");
    setTimeout(() => {
      error.classList.remove("disappear");
      setHasError(false);
      setIsVisible(false);
    }, 1000);
  };

  return message ? (
    <div className={`ErrorMassege ${isVisible ? "appear" : ""}`}>
      <div className="error">
        <img src={errormasseg} alt="" className="errormassege error" />
        <span className="errormassege">{message}</span>
        <img
          src={cancel1}
          alt=""
          className="errormassege cancel"
          onClick={closeMessage}
        />
      </div>
    </div>
  ) : null;
}

export default ErrorMassege;
