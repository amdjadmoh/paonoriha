import React, { useState } from "react";
import "./EditTextCoordinates.css";
import add from "../Icons/addnewtour.svg";
import minus from "../Icons/minus.svg";
import trach from "../Icons/trach.svg";
function EditTextCoordinates() {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [zCoordinate, setZCoordinate] = useState(0);
  const [size, setSize] = useState(0);

  // Function to handle incrementing/decrementing coordinates
  const incrementCoordinate = (setter) => {
    setter((prevValue) => parseFloat((prevValue + 0.3).toFixed(1)));
  };

  const decrementCoordinate = (setter) => {
    setter((prevValue) => parseFloat((prevValue - 0.3).toFixed(1)));
  };

  const incrementSize = (setter) => {
  setter((prevValue) => prevValue + 1);
};

const decrementSize = (setter) => {
  setter((prevValue) => prevValue - 1);
};


  return (
    <div className="edit-text-container">
      <div className="location-delete">
        <button className="delete-btn-edit-txt">
          <span className="span-location-delete">Delete</span>
          <img src={trach} alt="Trash" className="delete-btn-edit-txt-icon" />
        </button>
        <button className="Destination-btn-edit-txt">
          <span className="span-location-delete">Add New Text</span>
          <img src={add} alt="Add" className="Destination-btn-edit-txt-icon" />
        </button>
      </div>
      <div className="edit-text-buttons">
        <div className="coordinate-buttons">
          <span className="Rotation">Rotation:</span>
          <div className="coordinate">
            <div className="x-coordinate">
              <span className="coor-span">X-coordinate:</span>
              <button
                className="coor-btn"
                onClick={() => incrementCoordinate(setXCoordinate)}
              >
                <img src={add} alt="add-icon" className="coor-img" />
              </button>
              <span className="counter">{xCoordinate}</span>
              <button
                className="coor-btn"
                onClick={() => decrementCoordinate(setXCoordinate)}
              >
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="y-coordinate">
              <span className="coor-span">Y-coordinate:</span>
              <button
                className="coor-btn"
                onClick={() => incrementCoordinate(setYCoordinate)}
              >
                <img src={add} alt="add-icon" className="coor-img" />
              </button>
              <span className="counter">{yCoordinate}</span>
              <button
                className="coor-btn"
                onClick={() => decrementCoordinate(setYCoordinate)}
              >
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
            <div className="z-coordinate">
              <span className="coor-span">Z-coordinate:</span>
              <button
                className="coor-btn"
                onClick={() => incrementCoordinate(setZCoordinate)}
              >
                <img src={add} alt="add-icon" className="coor-img" />
              </button>
              <span className="counter">{zCoordinate}</span>
              <button
                className="coor-btn"
                onClick={() => decrementCoordinate(setZCoordinate)}
              >
                <img src={minus} alt="minus-icon" className="coor-img" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="width-edit">
        <span className="Size">Size:</span>
        <div className="txt-width">
          <button className="coor-btn" onClick={() => incrementSize(setSize)}>
            <img src={add} alt="Increment Size" className="coor-img" />
          </button>
          <span className="counter">{size}</span>
          <button className="coor-btn" onClick={() => decrementSize(setSize)}>
            <img src={minus} alt="Decrement Size" className="coor-img" />
          </button>
        </div>
      </div>
      <div className="add-new-text">
        <input type="text" className="txt-content" />
        <span className="labelline">Enter your text</span>
      </div>
    </div>
  );
}

export default EditTextCoordinates;
