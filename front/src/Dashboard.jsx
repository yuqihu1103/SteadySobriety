import React, { useState } from "react";
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import DrinkingLog from "./DrinkingLog";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  return (
    <div>
      <Leaderboard />
      <Welcome loggedInUser={loggedInUser} />
      <DrinkingLog loggedInUser={loggedInUser} />
    </div>
  );
}

export default Dashboard;
