import React, { useState } from "react";
// import "./MyToursPage.css";
import trach from "./Icons/trach.svg";
import edit from "./Icons/edit.svg";
import clock from "./Icons/ClockHistory.svg";
import img from "./Icons/img.png";
import addnewtour from "./Icons/addnewtour.svg";

function MyToursPage() {
  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    setDivs((prevDivs) => [...prevDivs, {}]);
  };

  const removeDiv = (index) => {
    setDivs((prevDivs) => prevDivs.filter((_, i) => i !== index));
  };

  const [sure, setSure] = useState({});

  const openSure = (index) => {
    setSure((prevSure) => ({ ...prevSure, [index]: !prevSure[index] }));
  };

  return (
    <div className="my-tours">
      {/* the title */}
      <div className="my-tours-title">
        <h1>My Tours</h1>
      </div>

      {/* the list of tours */}
      <div className="tours-list">
        {divs.map((_, index) => (
          <div className="tour-info" key={index}>
            <div className="tour-img">
              <div className="img-view">
                <img src={img} alt="" />
              </div>
              <span>Tour name</span>
              
            </div>
            <div className="last-update">
              <img src={clock} alt="" />
              <span>Last update: 2 hours ago</span>
            </div>
            {/* delete and update buttons */}
            <div className="edit-or-delete">
              <button className="delete" onClick={() => openSure(index)}>
                <img src={trach} alt="" />
                <span>Delete</span>
              </button>
              {sure[index] && (
                <span className="sure-message" onClick={() => removeDiv(index)}>
                  Sure?
                </span>
              )}
              <button className="edit">
                <img src={edit} alt="" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="tour-button" onClick={addDiv}>
        <button>
          <img src={addnewtour} alt="" />
          <span>Add New Tour</span>
        </button>
      </div>
    </div>
  );
}

export default MyToursPage;
