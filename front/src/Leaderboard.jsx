import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data when the component mounts
    fetch("/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the state
        setLeaderboardData(data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  return (
    <div>
      <h2>Leaderboard</h2>
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
