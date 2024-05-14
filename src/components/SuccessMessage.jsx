import React from 'react'
import './SuccessMessage.css';
import cancel1 from './Icons/cancel.svg';
import cancel2 from './Icons/cancel2.svg';
import successmessage from './Icons/whiteTickMark.svg';

function SuccessMessage({ message }) {
    return (
      <div className="SuccessMessage appear">
        <div className='success'>
          <img src={successmessage} alt="" className="successmessage success" />
                <span className="successmessage">{message}</span>
          <img src={cancel1} alt="" className="successmessage cancel" />
        </div>
      </div>
    );
}

export default SuccessMessage