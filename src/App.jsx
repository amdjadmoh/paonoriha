import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MakeYourTours from "./components/HomePageComponents/MakeYourTours";
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;