// src/App.jsx

import React from "react";
import Register from "./Register";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import IntroScreen from "./IntroScreen";

function App() {
  // Initialize the state to store the username
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <div>
      <Register setLoggedInUser={setLoggedInUser} />
      <Login setLoggedInUser={setLoggedInUser} />
      <IntroScreen />
      <Leaderboard />
    </div>
  );
}

export default App;
