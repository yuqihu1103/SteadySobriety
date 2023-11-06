import React, { useEffect, useState } from "react";

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
    <div>
      <h2>Leaderboard</h2>
      <div>
        <span>Last Updated: {lastUpdated}</span>
        <button onClick={fetchLeaderboardData}>Refresh</button>
      </div>
      <table>
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
              <td>{entry.username}</td>
              <td>{entry.streak} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
