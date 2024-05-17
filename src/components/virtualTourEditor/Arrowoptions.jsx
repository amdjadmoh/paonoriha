import React from 'react'
import Rotatebuttons from './rotatebuttons'
import { useState } from 'react'

function Arrowoptions({sendMessageToIframe, setaxes}) {
  let [scale,setscale] = useState('')
  return (
    <>
    <Rotatebuttons sendMessageToIframe={sendMessageToIframe} />
    <input type='text' onChange={(event) => {
      setscale(event.target.value)
      sendMessageToIframe({ana:'scalearrow',message:event.target.value})
      }} placeholder='15' value={scale} />
    <button onClick={() => {
      sendMessageToIframe({ana : "deletearrow"})
      sendMessageToIframe({ana : "hideaxes"})
    }}
    >deletearrow</button>
    </>
  )
}

export default Arrowoptions