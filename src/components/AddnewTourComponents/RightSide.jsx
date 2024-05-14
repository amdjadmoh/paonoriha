import React from "react";
import "./RightSide.css";
import { useState } from "react";
import Download from "../Icons/Download.svg";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import img from "../Icons/img.png";
import trash from "../Icons/trach.svg";
import reload from "../Icons/reload.svg";
import edit from "../Icons/edit.svg";
import upload from "../Icons/upload.svg";
function rightside() {
  const [openTitleOrInput, setOpenTitleOrInput] = useState(false); ///to open the input and close the title and the opsite
  const [isHovered, setIsHovered] = useState(false); //to open massege when we hover on the delete or reload
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Name"); // Default value for input
  const [sureMassege, setSureMassege] = useState(false); //to open the sure massege
  const [txtEdit, ssetTxtEdit] = useState(false); //EditTextCoordinates components

  const openTxtEdit = () => {
    ssetTxtEdit(!txtEdit);
  };
  const openSureMassege = () => {
    setSureMassege(!sureMassege);
  };

  const openTheTitleOrTheInput = () => {
    setOpenTitleOrInput(!openTitleOrInput);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverMouseEnter = () => {
    setIsOpen(true);
  };

  const hoverMouseLeave = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="right-side">
      <div className="img-list-right-side">
        <div className="right-side-img">
          <img src={img} className="reload-img-rigthside" alt="Image" />
          <div className="right-side-button">
            <button
              className="img-list-right-side-button-delete"
              onClick={openSureMassege}
            >
              <img src={trash} className="deleteimg" alt="trash-icon" />
            </button>
            <button
              onMouseEnter={hoverMouseEnter}
              onMouseLeave={hoverMouseLeave}
              className="img-list-right-side-button-reload"
            >
              <img src={reload} className="reloadimg" />
            </button>
          </div>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={openTheTitleOrTheInput}
            className={`right-side-img-title ${
              !openTitleOrInput ? "" : "close"
            }`}
          >
            {value}
          </h3>
          <div
            className={`sure-massege-right-side ${sureMassege ? "" : "close"}`}
          >
            <span className="sure-massege-right-side-span">Sure ?</span>
          </div>
          <div
            className={`edit-massege-right-side ${isHovered ? "" : "close"}`}
          >
            <div className="img-edit-right-side">
              <img src={edit} alt="edit-icon" className="icon-right-side" />
            </div>
            <span className="edit-massege-right-side-span">Edit</span>
          </div>
          <div className={`reload-massege-right-side ${isOpen ? "" : "close"}`}>
            <div className="img-reload-right-side">
              <img src={upload} alt="upload-icon" className="icon-right-side" />
            </div>
            <span className="reload-massege-right-side-span">Update</span>
          </div>
          <div
            className={`change-name-right-side ${
              openTitleOrInput ? "" : "close"
            }`}
          >
            <input
              type="text"
              className={`change-right-side`}
              value={value}
              onChange={handleChange}
            />
            <img
              src={Save}
              alt="Save-icon"
              onClick={openTheTitleOrTheInput}
              className="save-icon-right-side"
            />
          </div>
        </div>
      </div>
      <div className="upload-button-right-side">
        <button className="upload-right-side">
          <img src={Download} alt="download-icon" className="download-icon-rigth-side" />
        </button>
      </div>
    </div>
  );
}

export default rightside;
