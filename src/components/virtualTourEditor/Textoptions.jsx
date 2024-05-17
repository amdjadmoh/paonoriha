import React from "react";
import Rotatebuttons from "./rotatebuttons";

function Textoptions({ sendMessageToIframe }) {
  return (
    <>
      <Rotatebuttons sendMessageToIframe={sendMessageToIframe} />
      <button
        onMouseDown={() => {
          sendMessageToIframe({ ana: "wp" });
        }}
        onMouseUp={() => {
          sendMessageToIframe({ ana: "e" });
        }}
      >
        w+
      </button>
      <button
        onMouseDown={() => {
          sendMessageToIframe({ ana: "wm" });
        }}
        onMouseUp={() => {
          sendMessageToIframe({ ana: "e" });
        }}
      >
        w-
      </button>
      <button
        onMouseDown={() => {
          sendMessageToIframe({ ana: "lp" });
        }}
        onMouseUp={() => {
          sendMessageToIframe({ ana: "e" });
        }}
      >
        l+
      </button>
      <button
        onMouseDown={() => {
          sendMessageToIframe({ ana: "lm" });
        }}
        onMouseUp={() => {
          sendMessageToIframe({ ana: "e" });
        }}
      >
        l-
      </button>
      <input type="text" placeholder="new value" onInput={ event => sendMessageToIframe({ana : 'valuechange' , message : event.target.value}) }></input>
      <button onClick={() => sendMessageToIframe({ana : 'deletetext'})}>deletetext</button>
    </>
  );
}

export default Textoptions;