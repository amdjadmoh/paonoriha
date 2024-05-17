import React from "react";
import "./CreateForm.css";
import img from "../Icons/img.png";
import cancel from "../Icons/cancel.svg";
import upload from "../Icons/upload.svg";

import Panorama from "../Icons/Panorama.svg";

function CreateForm() {
  return (
    <form action="" className="createForm">
      <button className="create-form-cancel-btn">
        <img
          src={cancel}
          alt="cancel-icon"
          className="create-form-cancel-img"
        />
      </button>
      <h1 className="create-form-title">Create Virtual Tour</h1>
      <input
        type="text"
        className="create-form-tour-name"
        name="tourName"
        placeholder="Tour name"
      />
      <div className="tour-form-img">
          <label for="fileInput" className="LABEL">
          <img src={upload} alt="Upload Icon" className="createform-IMG" />
          Upload Tour Image
  </label>
  <input type="file" id="fileInput"  className="INPUT"/>
        {/* <img src={img} alt="img" className="tour-form-img-view" />
        <button className="remove-img-btn">
          <img src={cancel} alt="cancel-icon" className="remove-img-icon" />
        </button> */}
      </div>
      <div className="create-form-button">
        <button className="create-form-buttons next" type="submit">
          <img src={Panorama} alt="" className="nextImg" />
          Creat Tour
        </button>
      </div>
    </form>
  );
}

export default CreateForm;