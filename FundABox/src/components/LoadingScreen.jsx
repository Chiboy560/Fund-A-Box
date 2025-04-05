// components/LoadingScreen.jsx
import React from "react";
import "./LoadingScreen.css";
import logo from "../assets/logo.png"; // Adjust path if needed

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
