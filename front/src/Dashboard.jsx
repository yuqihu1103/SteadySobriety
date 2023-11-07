import React, { useState } from "react";
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import DrinkingLog from "./DrinkingLog";
import DrinkingHistory from "./DrinkingHistory";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  return (
    <div>
      <Leaderboard />
      <Welcome loggedInUser={loggedInUser} />
      <DrinkingLog loggedInUser={loggedInUser} />
      <DrinkingHistory loggedInUser={loggedInUser} />
    </div>
  );
}

export default Dashboard;
