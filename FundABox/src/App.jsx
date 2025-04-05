import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // Import the Loading Screen
import Auth from './components/auth'; // Import the Auth component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Feed from './pages/Feed';
import Donate from './pages/Donate';
import Card from './components/card'
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

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>  {/* Use Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );

};

export default App;