import React, { useState } from "react";
import "./EditTextCoordinates.css";
import add from "../Icons/addnewtour.svg";
import minus from "../Icons/minus.svg";
import trach from "../Icons/trach.svg";
function EditTextCoordinates() {
  return (
    <div className="edit-text-container">
      <div className="location-delete">
        <button className="delete-btn-edit-txt">
          <span className="span-location-delete">Delete</span>
          <img src={trach} alt="Trash" className="delete-btn-edit-txt-icon" />
        </button>
      </div>
      <div className="edit-text-buttons">
        <div className="coordinate-buttons">
          <div className="coordinate">
            <div className="x-coordinate">
              <span className="coor-span">X-coordinate</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>
              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="y-coordinate">
              <span className="coor-span">Y-coordinate</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>

              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="z-coordinate">
              <span className="coor-span">Z-coordinate</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>

              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
          </div>
          <div className="coordinate">
            <div className="x-coordinate">
              <span className="coor-span">X-Rotation</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>

              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="y-coordinate">
              <span className="coor-span">Y-Rotation</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>

              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="z-coordinate">
              <span className="coor-span">Z-Rotation</span>
              <button className="coor-btn">
                <img src={add} alt="add-icon" className="coor-img" />
              </button>

              <button className="coor-btn">
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="width-edit">
        <span className="Size">Size:</span>
        <div className="txt-width">
          <button className="coor-btn">
            <img src={add} alt="Increment Size" className="coor-img" />
          </button>

          <button className="coor-btn">
            <img src={minus} alt="Decrement Size" className="coor-img" />
          </button>
        </div>
      </div>
      <div className="add-new-text">
        <input
          type="text"
          className="txt-content"
          placeholder="Enter your text"
        />
      </div>
    </div>
  );
}

export default EditTextCoordinates;
