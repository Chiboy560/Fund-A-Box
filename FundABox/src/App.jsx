// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 1.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? <LoadingScreen /> : <Navbar />;
};

export default App;