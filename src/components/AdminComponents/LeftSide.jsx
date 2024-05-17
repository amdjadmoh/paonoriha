import React, { useEffect, useRef, useState } from "react";
import "./LeftSide.css";
import EditTextCoordinates from "./EditTextCoordinates";
import EditDestinationCoordinates from "./EditDestinationCoordinates";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import img from "../Icons/img.png";
import Mainform from "../virtualTourEditor/mainform";
import { useParams } from "react-router-dom";
// import Arrowoptions from "../virtualTourEditor/Arrowoptions";
// import Textoptions from "../virtualTourEditor/Textoptions";
// import ScenesGrid from "../virtualTourEditor/scenesGrid";
function LeftSide({ currentScene }) {
  let [mainmenu, setmainmenu] = useState(true);
  let [arrowoptions, setarrowoptions] = useState(false);
  let [textoptions, settextoptions] = useState(false);
  let [idtogo, setidtogo] = useState(false);
  const { tourID } = useParams();
  let iframeRef = useRef(null);

  let messagehandler = (event) => {
    switch (event.data.message) {
      case "domcontentloaded": {
        sendMessageToIframe({ ana: "fetch" ,message:tourID });
        break;
      }
      case "displayoptionsarrow": {
        setmainmenu(false);
        setarrowoptions(true);
        settextoptions(false);
        break;
      }
      case "hideoptions": {
        setmainmenu(true);
        settextoptions(false);
        setarrowoptions(false);
        break;
      }
      case "displayoptionstext": {
        setmainmenu(false);
        setarrowoptions(false);
        settextoptions(true);
        break;
      }
      case "arrowdeleted": {
        setmainmenu(true);
        settextoptions(false);
        setarrowoptions(false);
        break;
      }
      case "textdeleted": {
        setmainmenu(true);
        settextoptions(false);
        setarrowoptions(false);
        break;
      }
      case "displaygrid": {
        setidtogo(true);
        break;
      }
    }
  };

  const sendMessageToIframe = (data) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(data, "*");
    }
  };

  useEffect(() => {
    window.addEventListener("message", messagehandler);
  }, []);

  return (
    <div className="left-side">
      {/* <div className={`EditTextCoordinates`}>
        <EditTextCoordinates />
      </div> */}
      {/* <div className="EditTextCoordinates">
        <EditDestinationCoordinates />
      </div> */}
      <div className={`head-buttons-left-side`}>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={camera} className="camera-left-side" alt="camera-icon" />
          </div>
          <span className="headbutton-span">New Hotspot</span>
        </div>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={Type} className="type-left-side" alt="txt-icon" />
          </div>
          <span className="headbutton-span">New Text</span>
        </div>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={Info} className="info-left-side" alt="info-icon" />
          </div>
          <span className="headbutton-span">New Info</span>
        </div>
      </div>
      <div className="left-side-view">
    <iframe
      className="adminiframe"
      id="adminiframe"
      src={`http://localhost:3001`}
      ref={iframeRef}
    ></iframe>
      </div>
      <button className="save-button-left-side">
        <img src={Save} alt="save-icon" className="save-button-img-left-side" />
        Save
      </button>
    </div>
  );
}

export default LeftSide;
