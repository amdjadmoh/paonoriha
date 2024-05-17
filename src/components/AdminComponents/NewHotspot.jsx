import React from "react";
import "./NewHotspot.css";
import cancel from "../Icons/cancel.svg";
import correct from "../Icons/correct.svg";
import img from "../Icons/img.png";
function NewHotspot() {
  return (
    <div className="newhotspot">
      <h1 className="hotspotTitle">Add New Hotspot</h1>
      <div className="yourHotspot">
        <div className="hotspoyimgviwe">
          <img src={img} alt="" className="hotspotimg" />
          <h3 className="hotspotimgtilt">Sence name</h3>
        </div>
      </div>
      <div className="hotspot-button">
        <button className="hotspot-button cancel">
          <img src={cancel} alt="cancel-icon" />
          Discard
        </button>
        <button className="hotspot-button submit">
          <img src={correct} alt="correct-icon" />
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewHotspot;
