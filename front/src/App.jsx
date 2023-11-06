// src/App.jsx

import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import IntroScreen from "./IntroScreen";
import Dashboard from "./Dashboard";

function App() {
  // Initialize the state to store the username
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  //on logout: localStorage.removeItem("loggedInUser");

  return (
    <div>
      <Register setLoggedInUser={setLoggedInUser} />
      <Login setLoggedInUser={setLoggedInUser} />
      <IntroScreen />
      <Dashboard
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
    </div>
  );
}

export default App;
