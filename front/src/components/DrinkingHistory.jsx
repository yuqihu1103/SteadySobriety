import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InformationPopover from "./InformationPopover";
import "../styles/DrinkingHistory.css";

const infoContent = (
  <ul>
    <li>Enter the drinking day in the provided field.</li>
    <li>Click `Save Log` to record the day.</li>
    <li>Your logged drinking days will appear in sorted order.</li>
    <li>The most recent date will be at the top.</li>
    <li>Your sober days streak will be shown under the welcome message.</li>
  </ul>
);

const DrinkingHistory = ({
  loggedInUser,
  numDrinkingLogs,
  setNumDrinkingLogs,
}) => {
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
          setNumDrinkingLogs(numDrinkingLogs - 1);
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

  const newest = (index) => {
    if (index === 0) {
      return "newest";
    } else {
      return "";
    }
  };

  return (
    <div className="drinking-history-container">
      <div className="history-header">
        <h2>Drinking History</h2>
        <InformationPopover>{infoContent}</InformationPopover>
      </div>

      <div className="log-history-scrollable">
        {logHistory.length === 0 ? (
          <p className="log-entry">Create your first log!</p>
        ) : (
          logHistory.map((log, index) => (
            <div className="log-entry" key={index}>
              <div className={newest(index)}>
                {new Date(log.date).toLocaleDateString()}
              </div>
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
  setNumDrinkingLogs: PropTypes.func.isRequired,
};

export default DrinkingHistory;
