import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/DrinkingLog.css";

const DrinkingLog = ({ loggedInUser, setNumDrinkingLogs, numDrinkingLogs }) => {
  const [logDate, setLogDate] = useState("");

  const handleSaveLog = async () => {
    try {
      const currentDate = new Date();
      // Validate date format (mm/dd/yyyy)
      const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!logDate.match(dateFormat)) {
        alert("Please enter a valid date in the format mm/dd/yyyy");
        return;
      }

      const selectedDate = new Date(logDate);
      if (selectedDate > currentDate) {
        alert("Cannot pick a future date!");
        return;
      }

      const response = await fetch("/sober-log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: loggedInUser,
          date: selectedDate.toISOString(),
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setNumDrinkingLogs(numDrinkingLogs + 1);
        setLogDate(""); // Reset the entered date
        alert("Log created successfully!");
      } else {
        if (response.status === 400) {
          alert("That date has already been recorded.");
        } else {
          throw new Error(data.error || "Error logging drinking day.");
        }
      }
    } catch (error) {
      console.error("Error logging drinking day:", error);
      alert("Failed to log drinking day.");
    }
  };

  return (
    <div className="drinking-log-container">
      <h3 className="log-label">Log Drinking Day</h3>
      <input
        type="text"
        placeholder="Enter date (mm/dd/yyyy)"
        value={logDate}
        onChange={(e) => setLogDate(e.target.value)}
      />
      <button className="save-log-button" onClick={handleSaveLog}>
        Save Log
      </button>
    </div>
  );
};

DrinkingLog.propTypes = {
  loggedInUser: PropTypes.string,
  setNumDrinkingLogs: PropTypes.func.isRequired,
  numDrinkingLogs: PropTypes.number.isRequired,
};

export default DrinkingLog;
