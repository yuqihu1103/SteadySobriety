import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/DrinkingHistory.css";

const DrinkingHistory = ({ loggedInUser, numDrinkingLogs }) => {
  const [logHistory, setLogHistory] = useState([]);

  useEffect(() => {
    fetchLogHistory();
  }, [loggedInUser, numDrinkingLogs]);

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

  const deleteLog = async (date) => {
    if (window.confirm("Are you sure you want to delete this log?")) {
      try {
        const response = await fetch(`/sober-log/${loggedInUser}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date }),
        });
        if (response.ok) {
          // Refresh the log history to reflect the deletion
          fetchLogHistory();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete the log.");
        }
      } catch (error) {
        console.error("Error deleting log:", error);
      }
    }
  };

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
              <button
                className="delete-button"
                onClick={() => deleteLog(log.date)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

DrinkingHistory.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  numDrinkingLogs: PropTypes.number.isRequired,
};

export default DrinkingHistory;
