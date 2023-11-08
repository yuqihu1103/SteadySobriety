import React, { useEffect, useState } from "react";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchLeaderboardData = () => {
    fetch("/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data);
        // Set the last updated time
        setLastUpdated(new Date().toLocaleString());
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  };

  useEffect(() => {
    // Fetch leaderboard data when the component mounts
    fetchLeaderboardData();
  }, []); // The empty dependency array ensures this effect runs once on component mount

  return (
    <div className="container mt-4 leaderboard">
      <h2 className="mb-3 leaderboard-title">Leaderboard</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="last-update">Last Updated: {lastUpdated}</span>
        <button
          className="btn btn-primary refresh"
          onClick={fetchLeaderboardData}
        >
          Refresh
        </button>
      </div>
      <div className="table-responsive leader-table">
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
    </div>
  );
}

export default Leaderboard;
