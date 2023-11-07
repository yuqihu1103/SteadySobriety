import React, { useState } from "react";
import PropTypes from "prop-types";
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

Dashboard.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  setLoggedInUser: PropTypes.func.isRequired,
};

export default Dashboard;
