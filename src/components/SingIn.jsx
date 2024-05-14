import React from "react";
import "./SingIn.css";
import SingInInputs from "./SingInCoponents/SingInInputs";
import home from "./Icons/home.svg";
function SingIn({onError,onSuccess}) {
  return (
      <div className="singin-form">
        <SingInInputs onError={onError} onSuccess={onSuccess} />
      </div>
  );
}

export default SingIn;
