import React from "react";
import "./AddNewTour.css";
import RightSide from './AddnewTourComponents/RightSide';
import LeftSide from './AddnewTourComponents/LeftSide';
function AddNewTour() {
  return (
    <div className="container">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default AddNewTour;
