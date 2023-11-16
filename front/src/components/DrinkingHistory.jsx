import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/DrinkingHistory.css";

const DrinkingHistory = ({ loggedInUser, numDrinkingLogs }) => {
  const [logHistory, setLogHistory] = useState([]);

  useEffect(() => {
    const fetchLogHistory = async () => {
      if (loggedInUser) {
        try {
          const response = await fetch(`/sober-log/${loggedInUser}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();

          if (response.ok) {
            const sortedHistory = data.userLogHistory.sort(
              (b, a) => new Date(a.date) - new Date(b.date)
            );
            setLogHistory(sortedHistory);
          } else {
            throw new Error(data.error || "Failed to fetch log history.");
          }
        } catch (error) {
          console.error("Error fetching log history:", error);
        }
      }
    };

    fetchLogHistory();
  }, [loggedInUser, numDrinkingLogs]);

  return (
    <div className="drinking-history">
      <h2>Drinking History</h2>
      <div className="log-history-scrollable">
        {logHistory.length === 0 ? (
          <p className="log-entry">Create your first log!</p>
        ) : (
          logHistory.map((log, index) => (
            <div className="log-entry" key={index}>
              {new Date(log.date).toLocaleDateString()}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

DrinkingHistory.propTypes = {
  loggedInUser: PropTypes.string.isRequired, // assuming loggedInUser is a string identifier
  numDrinkingLogs: PropTypes.number.isRequired,
};

export default DrinkingHistory;
