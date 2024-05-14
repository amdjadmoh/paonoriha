import React, { useState } from "react";
import "./HomePage.css";
import NavBar from "./HomePageComponents/NavBar";
import LogIn from "./LogIn";
import SingIn from "./SingIn";
import MyToursPage from "./MyToursPage";
import AddNewTour from './AddNewTour';

function HomePage() {
  const [logIn, setLogIn] = useState(false);
  const [sginUp, setSginUp] = useState(false);
  const [samples, setSamples] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [tutorials, setTutorials] = useState(false);
  //to open LogIn
  const handleLogInChange = () => {
    setLogIn(!logIn);
    setSginUp(false);
    setSamples(false);
    setHome(false);
    setAbout(false);
    setTutorials(false);
  };
  //to open SginUp
  const handleSignUpChange = () => {
    setLogIn(false);
    setSginUp(!sginUp);
    setSamples(false);
    setHome(false);
    setAbout(false);
    setTutorials(false);
  };
  //to open Samples
  const handleSamplesChange = () => {
    setLogIn(false);
    setSginUp(false);
    setSamples(!samples);
    setHome(false);
    setAbout(false);
    setTutorials(false);
  };
  //to open Home
  const handleHomeChange = () => {
    setLogIn(false);
    setSginUp(false);
    setSamples(false);
    setHome(!home);
    setAbout(false);
    setTutorials(false);
  };
  //to open About
  const handleAboutChange = () => {
    setLogIn(false);
    setSginUp(false);
    setSamples(false);
    setHome(false);
    setAbout(!about);
    setTutorials(false);
  };
  //to open Tutorials
  const handleTutorialsChange = () => {
    setLogIn(false);
    setSginUp(false);
    setSamples(false);
    setHome(false);
    setAbout(false);
    setTutorials(!tutorials);
  };

  return (
    <div className="home-container">
      <NavBar
        logIn={logIn}
        sginUp={sginUp}
        onLogInChange={handleLogInChange}
        onSignUpChange={handleSignUpChange}
        onSamplesChange={handleSamplesChange}
        onHomeChange={handleHomeChange}
        onAboutChange={handleAboutChange}
        onTutorialsChange={handleTutorialsChange}
      />
      {logIn ? <LogIn /> : null}
      {sginUp ? <SingIn /> : null}
      {samples ? <MyToursPage /> : null}
      {about ? <AddNewTour /> :null}
    </div>
  );
}

export default HomePage;
