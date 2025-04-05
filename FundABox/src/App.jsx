import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // Import the Loading Screen
import auth from './components/auth'; // Import the Auth component

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  /*if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }*/

  return <Navbar />;
};

export default App;