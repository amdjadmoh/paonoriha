import React, { useState } from "react";
import "./MakeYourTours.css";
import user from "../Icons/user2.svg";
import cat from "../Icons/cat.svg";
import exit from "../Icons/exit.svg";

function MakeYourTours() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="MakeYourTours">
      <div className="user-edit-info">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="user-img"
        >
          <img src={cat} alt="" className="user-profile" />
          {isHovered && (
            <ul className="user">
              <li className="myacaunt">
                <img src={user} alt="" />
                My account
              </li>
              <li className="logout">
                <img src={exit} alt="" />
                Log out
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="go-to-your-tour">
        <button>Your Tours</button>
      </div>
    </div>
  );
}

export default MakeYourTours;
