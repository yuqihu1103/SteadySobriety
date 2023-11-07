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

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />{" "}
      {/* Include the Navbar component */}
      {loggedInUser ? (
        <Dashboard loggedInUser={loggedInUser} />
      ) : (
        <>
          <Register setLoggedInUser={setLoggedInUser} />
          <Login setLoggedInUser={setLoggedInUser} />
          <IntroScreen />
        </>
      )}
    </div>
  );
}

export default App;
