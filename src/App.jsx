import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MakeYourTours from "./components/HomePageComponents/MakeYourTours";
import ResetPassword from "./components/ResetPassword";
import ErrorMessage from "./components/ErrorMassege";
import SuccessMessage from "./components/SuccessMessage";

import MyToursPage from "./components/MyToursPage";
import NewInfoPoint from "./components/AddnewTourComponents/NewInfoPoint";
import NewHotspot from "./components/AddnewTourComponents/NewHotspot";
import LeftSide from "./components/AddnewTourComponents/LeftSide";
import Rightside from "./components/AddnewTourComponents/RightSide";
import AddNewTour from "./components/AddNewTour";
import EditTextCoordinates from "./components/AddnewTourComponents/EditTextCoordinates";
import EditDestinationCoordinates from "./components/AddnewTourComponents/EditDestinationCoordinates";
function App() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleError = (message) => {
    // This function is called when an error occurs
    setHasError(true);
    setErrorMessage(message);
  };
  const handleSuccess = (message) => {
    setSuccess(true);
    setSuccessMessage(message);
  };
  const [openMyTours, setOpenMytours] = useState(false);
  const handleMyToursChange = () => {
    setOpenMytours(!openMyTours);
  };
  return (
    <Router>
      {hasError && <ErrorMessage message={errorMessage} />}
      {success && <SuccessMessage message={successMessage} />}
      <Routes>
        <Route
          path="/"
          element={<HomePage onError={handleError} onSuccess={handleSuccess} />}
        />
        <Route
          path="/resetPassword/:resetToken"
          element={
            <ResetPassword onError={handleError} onSuccess={handleSuccess} />
          }
        />
      </Routes>
    </Router>
    <div>
      <EditDestinationCoordinates />
      {/* {!openMyTours ? (
        <HomePage onMyToursChange={handleMyToursChange} />
      ) : (
        MyToursPage
      )} */}
    </div>
  );
}

export default App;
