import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Auth from './components/auth';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Feed from './pages/Feed';
import Donate from './pages/Donate';
import Map from './pages/Map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './config/firebase'; // import Firebase authentication
import { onAuthStateChanged } from "firebase/auth"; // import onAuthStateChanged to track auth state

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Set up the auth state listener
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/map" element={<Map />}/>
      </Routes>
    </Router>
  );
};

export default App;
