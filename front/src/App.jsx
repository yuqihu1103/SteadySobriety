// src/App.jsx

import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import IntroScreen from "./IntroScreen";
import Welcome from "./Welcome";

function App() {
  // Initialize the state to store the username
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <div>
      <Register setLoggedInUser={setLoggedInUser} />
      <Login setLoggedInUser={setLoggedInUser} />
      <IntroScreen />
      <Leaderboard />
      <Welcome loggedInUser={loggedInUser} />
    </div>
  );
}

export default App;
