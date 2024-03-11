import React, { useState } from "react";
import PropTypes from "prop-types";
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import DrinkingLog from "./DrinkingLog";
import DrinkingHistory from "./DrinkingHistory";
import "../styles/Dashboard.css";

function Dashboard({ loggedInUser }) {
  const [numDrinkingLogs, setNumDrinkingLogs] = useState(0);
  return (
    <div className="dashboard">
      <div className="welcome">
        <Welcome
          loggedInUser={loggedInUser}
          numDrinkingLogs={numDrinkingLogs}
        />
      </div>
      <div className="row">
        <div className="col-lg-6 col-12 drinking-info" id="drinking-info">
          <DrinkingHistory
            loggedInUser={loggedInUser}
            numDrinkingLogs={numDrinkingLogs}
            setNumDrinkingLogs={setNumDrinkingLogs}
          />
          <DrinkingLog
            loggedInUser={loggedInUser}
            setNumDrinkingLogs={setNumDrinkingLogs}
            numDrinkingLogs={numDrinkingLogs}
          />
        </div>
        <div className="col-lg-6 col-12">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
};

export default Dashboard;
