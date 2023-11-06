// src/App.jsx

import React from "react";
import Register from "./Register";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import IntroScreen from "./IntroScreen";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <IntroScreen />
      <Leaderboard />
    </div>
  );
}

export default App;
