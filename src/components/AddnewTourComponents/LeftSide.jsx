import React from "react";
import "./LeftSide.css";
import EditTextCoordinates from "./EditTextCoordinates";
import { useState } from "react";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import close from "../Icons/close.svg";
import img from '../Icons/img.png'
function LeftSide() {
  const [txtEdit, ssetTxtEdit] = useState(false); //EditTextCoordinates components

  const openTxtEdit = () => {
    ssetTxtEdit(!txtEdit);
  };

  return (
    <div className="left-side">
      <button
        className={`close-btn-left-side ${txtEdit ? "" : "close"}`}
        onClick={openTxtEdit}
      >
        <img src={close} alt="close-icon" />
      </button>
      <div className={`EditTextCoordinates ${txtEdit ? "" : "close"}`}>
        <EditTextCoordinates />
      </div>
      <div className={`head-buttons-left-side ${!txtEdit ? "" : "close"}`}>
        <div className={`buttons-left-side ${!txtEdit ? "" : "close"}`}>
          <div className="icons-left-side">
            <img src={camera} className="camera-left-side" alt="camera-icon" />
          </div>
          <span className="headbutton-span">New Hotspot</span>
        </div>
        <div
          className={`buttons-left-side ${!txtEdit ? "" : "close"}`}
          onClick={openTxtEdit}
        >
          <div className="icons-left-side">
            <img src={Type} className="type-left-side" alt="txt-icon" />
          </div>
          <span className="headbutton-span">New Text</span>
        </div>
        <div className={`buttons-left-side ${!txtEdit ? "" : "close"}`}>
          <div className="icons-left-side">
            <img src={Info} className="info-left-side" alt="info-icon" />
          </div>
          <span className="headbutton-span">New Info</span>
        </div>
      </div>
      <div className="left-side-view">
        <img src={img} alt="img" className="left-side-img-view" />
      </div>
      <button className="save-button-left-side">
        <img src={Save} alt="save-icon" className="save-button-img-left-side" />
        Save
      </button>
    </div>
  );
}

export default LeftSide;
