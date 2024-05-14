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
  const [user, setUser] = useState(false);
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }
  useEffect(() => {
    // this method checks with the server if the user is logged in
    // const checkAuthenticationStatus = async () => {
    //   const storedStatus = localStorage.getItem('isLoggedIn');
    //   if (storedStatus) {
    //     setIsLoggedIn(storedStatus === 'true');
    //   } else {
    //     try {
    //       const response = await axios.get(
    //         "http://localhost:5000/api/v1/users/amIlogged",
    //         { withCredentials: true }
    //       );
    //       console.log(response.data.status);
    //       if (response.data.status === "success") {
    //         setIsLoggedIn(true);
    //         localStorage.setItem('isLoggedIn', 'true');
    //       }
    //     } catch (error) {
    //       setIsLoggedIn(false);
    //       localStorage.setItem('isLoggedIn', 'false');
    //     }
    //   }
    // };

    // checkAuthenticationStatus();

    //this method just checks if a user exists in the local storage

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return user === false ? (
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
          <li className="navBarLI" onClick={onHomeChange}>Home</li>
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
