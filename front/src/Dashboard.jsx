import React, { useState } from "react";
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import DrinkingLog from "./DrinkingLog";
import DrinkingHistory from "./DrinkingHistory";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  const [numDrinkingLogs, setNumDrinkingLogs] = useState(0);
  return (
    <div>
      <Welcome loggedInUser={loggedInUser} />
      <Leaderboard />
      <DrinkingLog
        loggedInUser={loggedInUser}
        setNumDrinkingLogs={setNumDrinkingLogs}
        numDrinkingLogs={numDrinkingLogs}
      />
      <DrinkingHistory
        loggedInUser={loggedInUser}
        numDrinkingLogs={numDrinkingLogs}
      />
    </div>
  );
}

export default Dashboard;
