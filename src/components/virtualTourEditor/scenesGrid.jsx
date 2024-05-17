import React, { useRef } from 'react'
import models from './scenesjson'

function ScenesGrid({sendMessageToIframe,setidtogo}) {

  let id = useRef(0)

  let images = models.map((item) => (
    <div className="scenecontainer" key={item.id}>
      <img
        className="imagegrid"
        id={item.id}
        src={"./pictures/" + item.principal_image}
        alt="loading"
        onClick={() => {
          document.getElementById(id.current).style.border = null;
          id.current = item.id;
          document.getElementById(item.id).style.border = "4px solid blue";
        }}
      ></img>
      <p className="scenename">{item.title}</p>
    </div>
  ));

  return (
    <div className="scenesgridcontainer">
      <h1>Add New Hotspot</h1>
      <div className="gridcontainer">{images}</div>
      <div className="scenesbuttons">
        <button
          onClick={ () => {
            setidtogo(false)
            sendMessageToIframe({
            ana: "idtogoselected",
            message: id.current
            })
        }
        }
        >
          submit
        </button>
        <button
          onClick={() => {
            setidtogo(false);
            id.current = null
        }
        }
        >
          discard
        </button>
      </div>
    </div>
  );
}

export default ScenesGrid