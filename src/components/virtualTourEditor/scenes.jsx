import React, { useEffect, useRef, useState } from "react";
import models from "./scenesjson";

function Scenes({ sendMessageToIframe }) {
  
  let [global, setGlobal] = useState(models);

  let handleupload = () => {
    console.log("upload");
  };

  let images = global
    ? global.map((item) => (
        <img
          className="imagelink"
          key={item.id}
          src={"./pictures/" + item.principal_image}
          alt="loading"
          onClick={() => {
            sendMessageToIframe({ ana: "reset", message: item.id });
          }}
        ></img>
      ))
    : null;

  return (
    <div className="scenescontainer">
      <div className="scenes">{global ? images : null}</div>
      <button className="uploadbutton" onClick={handleupload}>
        upload
      </button>
    </div>
  );
}

export default Scenes;
