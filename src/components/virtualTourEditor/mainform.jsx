import React from 'react'

function adminform({
  sendMessageToIframe, setidtogo
}) {

  let handlesubmit = () => {
    console.log('handle submit')
  }

  let handleaddtext = () => {
    sendMessageToIframe({ ana: "addtext", message: null });
  }

  let handleAdd = () => {
    setidtogo(true)
  }

  return ( 
  <>
    <input
      type="button"
      value="add a button"
      id="add"
      name="add"
      className="addadmin"
      onClick={() => {
        handleAdd();
      }}
    ></input>
    {/* <input
        type="button"
        value="delete"
        id="delete"
        name="delete"
        className="deleteadmin"
        onClick={() => {
          sendMessageToIframe({ana : "delete",message: null})
        }}
      ></input> */}
    {/* <input
        type="button"
        value="submitadmin"
        id="delete"
        name="delete"
        className="submitadmin"
        onClick={handlesubmit}
      ></input> */}
    <input
      type="button"
      value="add text"
      id="add text"
      name="add text"
      className="addtext"
      onClick={handleaddtext}
    ></input>
  </>
  )
}

export default adminform