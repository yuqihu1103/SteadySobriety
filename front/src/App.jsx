import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import IntroScreen from "./components/IntroScreen";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import "./styles/App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  // Define a function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  const [activeComponent, setActiveComponent] = useState("Intro");

  useEffect(() => {
    // Update the active component based on the loggedInUser
    if (loggedInUser) {
      setActiveComponent("Dashboard");
    } else {
      setActiveComponent("Intro");
    }
  }, [loggedInUser]);

  return (
    <div>
      <Navbar
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
        setActiveComponent={setActiveComponent}
      />
      {renderActiveComponent(activeComponent)}
    </div>
  );

  function renderActiveComponent(componentName) {
    if (componentName === "Intro") {
      return <IntroScreen />;
    } else if (componentName === "Login") {
      return <Login setLoggedInUser={setLoggedInUser} />;
    } else if (componentName === "Register") {
      return <Register setLoggedInUser={setLoggedInUser} />;
    } else if (componentName === "Dashboard") {
      return <Dashboard loggedInUser={loggedInUser} />;
    } else if (componentName === "Resources") {
      return <Resources />;
    } else {
      return null;
    }
  }
}

export default App;
