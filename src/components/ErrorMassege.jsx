import React from 'react'
import './ErrorMassege.css';
import cancel1 from './Icons/cancel.svg';
import cancel2 from './Icons/cancel2.svg';
import errormasseg from './Icons/errormassege.svg';
function ErrorMassege({ message }) {
    return (
      <div className="ErrorMassege appear">
        <div className='error'>
          <img src={errormasseg} alt="" className="errormassege error" />
                <span className="errormassege">{message}</span>
          <img src={cancel1} alt="" className="errormassege cancel" />
        </div>
      </div>
    );
}

export default ErrorMassege