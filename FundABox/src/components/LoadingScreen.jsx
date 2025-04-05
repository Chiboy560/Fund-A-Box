// components/LoadingScreen.jsx
import React from "react";
import "../LoadingScreen.css";
import fundabox from "../assets/VerticalFund.png"
const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={fundabox} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;