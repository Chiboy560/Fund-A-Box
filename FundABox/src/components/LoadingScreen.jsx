// components/LoadingScreen.jsx
import React from "react";
//import "../styles/LoadingScreen.css";
import logo from "../assets/loading.png";
const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
