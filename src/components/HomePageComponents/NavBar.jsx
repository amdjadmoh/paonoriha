import React from "react";
import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../Icons/logo.svg";
import axios from "axios";
import Switch from "./Switch";
import MakeYourTours from "./MakeYourTours";
function NavBar({
  logIn,
  sginUp,
  onLogInChange,
  onSignUpChange,
  onHomeChange,
  onAboutChange,
  onTutorialsChange,
  onMyToursChanges
}) {
  // const [user, setUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // this method checks with the server if the user is logged in
    const checkAuthenticationStatus = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/v1/users/amIlogged",
            { withCredentials: true }
          );
          if (response.data.status === "success") {
            setIsLoggedIn(true);
            setIsLoading(false);

          }
        } catch (error) {
          setIsLoggedIn(false);
          setIsLoading(false);

      }
    };

    checkAuthenticationStatus();
    

    //this method just checks if a user exists in the local storage

    // const loggedInUser = localStorage.getItem("user");
    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   setUser(foundUser);
    // }
  }, []);
  if (isLoading) {
    return null; // Don't render anything while loading
  }
  return isLoggedIn === false ? (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="navBarUL">
          <li className="navBarLI" onClick={onHomeChange}>Home</li>
          <li className="navBarLI" onClick={onTutorialsChange}>Tutorials</li>
          <li className="navBarLI" onClick={onAboutChange}>About</li>
        </ul>
      </nav>
      <div className="switch">
        <Switch
          logIn={logIn}
          sginUp={sginUp}
          onLogInChange={onLogInChange}
          onSignUpChange={onSignUpChange}
        />
      </div>
    </div>
  ) : (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="navBarUL">
          <li className="navBarLI home" onClick={onHomeChange}>Home</li>
          <li className="navBarLI" onClick={onTutorialsChange}>Tutorials</li>
          <li className="navBarLI" onClick={onAboutChange}>About</li>
          <div className="NavBar-YourTours">
            <MakeYourTours onMyToursChanges />
      </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
