import React from 'react'
import './NewInfoPoint.css';
import cancel from '../Icons/cancel.svg';
import correct from '../Icons/correct.svg';
function NewInfoPoint() {
  return (
    <div className="newinfopoint">
      <form action="" className='infooint-form'>
        <h1 className="infopoint-title">Add New Info Point</h1>
        <input type="text" className="title-field" required name="titleField" placeholder='Title'/>
              <textarea
                  rows={5}
                  cols={40}
          className="sebjet-field"
          required
                  name="sebjectField"
                  placeholder='Subject'
        />
        <div className="infopoint-button">
          <button className="infopoint cancel">
            <img src={cancel} alt="cancel-icon" className="infopoint-img" />
            Discard
          </button>
          <button className="infopoint submit" type="submit">
            <img src={correct} alt="correct-icon" className="infopoint-img" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewInfoPoint