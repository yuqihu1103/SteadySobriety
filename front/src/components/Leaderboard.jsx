import React, { useEffect, useState } from "react";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentRank, setCurrentRank] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading indication

  const fetchLeaderboardData = () => {
    setIsLoading(true); // Set loading to true when fetching starts
    fetch("/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data.top50);
        setCurrentRank(data.currentUserRank);
        setLastUpdated(new Date().toLocaleString());
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after fetching completes
      });
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  return (
    <div className="container mt-4 leaderboard">
      <h2 className="mb-3 leaderboard-title">Leaderboard</h2>
      <div className="currentRank">
        <p>Your current rank: {currentRank} </p>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="last-update">Last Updated: {lastUpdated}</span>
        <button
          className="btn btn-primary refresh"
          onClick={fetchLeaderboardData}
        >
          Refresh
        </button>
      </div>
      {isLoading ? ( // Conditional rendering for loading indicator
        <div className="loading-placeholder">
          <p>Loading leaderboard data.</p>
          <p>Please be patient... </p>
          <img src="leaderboard_loading.jpg" alt="Flash in Zootopia, haha" />
        </div>
      ) : (
        <div className="table-responsive leader-table">
          {/* Render the leaderboard when not loading */}
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Streak</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={entry.username}>
                  <td>{index + 1}</td>
                  <td>
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : ""}
                    {entry.username}
                  </td>
                  <td>{entry.streak} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
