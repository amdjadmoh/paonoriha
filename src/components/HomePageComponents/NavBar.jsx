import React from "react";
import { useEffect,useState } from "react";
import "./NavBar.css";
import img from "../Icons/img.png";
import Switch from "./Switch";
function NavBar({
  logIn,
  sginUp,
  onLogInChange,
  onSignUpChange,
  onSamplesChange,
  onHomeChange,
  onAboutChange,
  onTutorialsChange
}) {
  onst[(isLoggedIn, setIsLoggedIn)] = useState(false);

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      try {
        const response = await axios.get("localhost:5000/api/v1/users/amIlogged");
        if (response.data.status === "success") {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthenticationStatus();
  }, []);
  return (
    <div className="navbar">
      <img src={img} alt="Food Lover Logo" />
      <nav>
        <ul>
          <li onClick={onHomeChange}>Home</li>
          <li onClick={onSamplesChange}>Samples</li>
          <li onClick={onTutorialsChange}>Tutorials</li>
          <li onClick={onAboutChange}>About</li>
        </ul>
      </nav>
      <div className="switch">
        {isLoggedIn?<Switch
          logIn={logIn}
          sginUp={sginUp}
          onLogInChange={onLogInChange}
          onSignUpChange={onSignUpChange}
        /> :null}
      </div>
    </div>
  );
}

export default NavBar;
