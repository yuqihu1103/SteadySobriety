import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Make sure to install this package
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import "../styles/DrinkingLog.css";

const DrinkingLog = ({ loggedInUser, setNumDrinkingLogs, numDrinkingLogs }) => {
  const [logDate, setLogDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false); // Control the visibility of the Save button

  const handleLogDay = () => {
    if (loggedInUser) {
      setShowDatePicker(true);
      setShowSaveButton(true);
    } else {
      alert("You must be logged in to log a drinking day.");
    }
  };

  const handleSaveLog = async () => {
    try {
      if (logDate > new Date()) {
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
          date: logDate.toISOString(),
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Log created successfully!");
        setNumDrinkingLogs(numDrinkingLogs + 1);
      } else {
        throw new Error(data.error || "Error logging drinking day.");
      }
    } catch (error) {
      console.error("Error logging drinking day:", error);
      alert("Failed to log drinking day.");
    }
  };

  return (
    <div className="drinking-log-container">
      <button className="log-button" onClick={handleLogDay}>
        Log Drinking Day
      </button>
      {showDatePicker && (
        <DatePicker
          selected={logDate}
          onChange={(date) => setLogDate(date)}
          inline
        />
      )}
      {showSaveButton && (
        <button className="save-log-button" onClick={handleSaveLog}>
          Save Log
        </button>
      )}
    </div>
  );
};

DrinkingLog.propTypes = {
  loggedInUser: PropTypes.string, // assuming loggedInUser is a string, and it can be null/undefined
  setNumDrinkingLogs: PropTypes.func.isRequired,
  numDrinkingLogs: PropTypes.number.isRequired,
};

export default DrinkingLog;
