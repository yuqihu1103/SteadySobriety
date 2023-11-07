import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import IntroScreen from "./IntroScreen";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar"; // Import the Navbar component

function App() {
  // Initialize the state to store the username
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  // Define a function to handle logout
  const handleLogout = () => {
    // Clear the user data from local storage and state
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  const [activeComponent, setActiveComponent] = useState("Intro");

  return (
    <div>
      <Navbar
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
        setActiveComponent={setActiveComponent}
      />{" "}
      {/* Include the Navbar component */}
      {loggedInUser ? (
        <Dashboard loggedInUser={loggedInUser} />
      ) : (
        renderActiveComponent(activeComponent) // Render the active component
      )}
    </div>
  );

  function renderActiveComponent(componentName) {
    if (componentName === "Intro") {
      return <IntroScreen />;
    } else if (componentName === "Login") {
      return <Login setLoggedInUser={setLoggedInUser} />;
    } else if (componentName === "Register") {
      return <Register setLoggedInUser={setLoggedInUser} />;
    } else {
      return null;
    }
  }
}

export default App;
