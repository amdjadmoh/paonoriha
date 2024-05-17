import React from "react";
import "./SuccessMessage.css";
import { useState } from "react";
import { useEffect } from "react";
import cancel1 from "./Icons/cancel.svg";
import cancel2 from "./Icons/cancel2.svg";
import successmessage from "./Icons/whiteTickMark.svg";

function SuccessMessage({ message, setSuccess }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeMessage();
    }, 2000); // Close the message after 3 seconds

    return () => clearTimeout(timer); // Clean up timer
  }, [message]);
  const closeMessage = () => {
    const error = document.querySelector(".successmessage");
    error.classList.remove("appear");
    error.classList.add("disappear");
    setTimeout(() => {
      error.classList.remove("disappear");
      setSuccess(false);
      setIsVisible(false);
    }, 1000);
  };
  return (
    <div className={`successmessage ${isVisible ? "appear" : ""}`}>
      <div className="success">
        <img src={successmessage} alt="" className="successmessageIcon" />
        <span className="successmessage">{message}</span>
        <img
          src={cancel1}
          alt=""
          className="successmessageCancelIcon"
          onClick={closeMessage}
        />
      </div>
    </div>
  );
}

export default SuccessMessage;
