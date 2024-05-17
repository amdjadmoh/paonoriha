import React, { useState } from "react";
import "./MakeYourTours.css";
import user from "../Icons/user2.svg";
import cat from "../Icons/cat.svg";
import exit from "../Icons/exit.svg";
import axios from "axios";

function MakeYourTours({ onMyToursChanges }) {
  const [isHovered, setIsHovered] = useState(false);
  const handelLogOut = async () => {
    try {
      localStorage.removeItem("user");

      // Send a logout request to the server

     const response= await axios.post("http://localhost:5000/api/v1/users/logout", {},{ withCredentials: true });
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const goToMyTours = () => {
    window.location.href = "/myTours";
  }
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
            <ul className="YourToursUL">
              <li className="myacaunt">
                <img src={user} alt="" />
                My account
              </li>
              <li className="logout" onClick={handelLogOut}>
                <img src={exit} alt="" />
                Log out
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="go-to-your-tour">
      <button onClick={goToMyTours} className="gotoyourtourbtn">
          Your Tours
        </button>      </div>
    </div>
  );
}

export default MakeYourTours;