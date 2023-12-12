import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import IntroScreen from "./components/IntroScreen";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import "./styles/App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/current-user"); // Make a GET request to your server endpoint
        if (response.ok) {
          const userData = await response.json(); // Parse response JSON
          setLoggedInUser(userData.username); // Set the username in state
        }
      } catch (error) {
        // Handle errors, e.g., user not authenticated
        console.error("Error fetching user data:", error);
        // You might want to redirect the user or handle the error in a different way
      }
    };

    fetchUserData();
  }, []);

  // Define a function to handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/logout"); // Make a GET request to your server logout endpoint
      if (response.ok) {
        setLoggedInUser(""); // Reset the loggedInUser state
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error, e.g., show an error message
    }
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
      return <IntroScreen setActiveComponent={setActiveComponent} />;
    } else if (componentName === "Login") {
      return (
        <Login
          setLoggedInUser={setLoggedInUser}
          setActiveComponent={setActiveComponent}
        />
      );
    } else if (componentName === "Register") {
      return (
        <Register
          setLoggedInUser={setLoggedInUser}
          setActiveComponent={setActiveComponent}
        />
      );
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
