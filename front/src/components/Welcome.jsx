import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Welcome.css";

const Welcome = ({ loggedInUser, numDrinkingLogs }) => {
  const [streak, setStreak] = useState(null); // New state for the streak number

  useEffect(() => {
    const fetchStreak = async () => {
      if (loggedInUser) {
        try {
          const response = await fetch(`/streak/${loggedInUser}`);
          const data = await response.json();

          if (response.ok) {
            if (data.message !== "No sober logs found.") {
              setStreak(data.streak); // Set the streak number in state
            } else {
              setStreak(null); // Reset the streak if no logs are found
            }
          } else {
            throw new Error(data.error || "Error fetching streak.");
          }
        } catch (error) {
          console.error("Fetch streak error:", error);
        }
      }
    };

    fetchStreak();
  }, [loggedInUser, numDrinkingLogs]);

  return (
    <div className="welcome-container">
      {loggedInUser ? (
        <>
          <h1 className="welcome-username">
            Welcome to Steady Sobriety, {loggedInUser}!
          </h1>
          {streak !== null ? (
            <h2 className="welcome-message">
              You have been sober for{" "}
              <span className="streak-days">{streak}</span> days!
            </h2>
          ) : (
            <h2 className="welcome-message">Log drinking days to start</h2>
          )}
        </>
      ) : (
        <h1 className="welcome-username">Welcome to Steady Sobriety!</h1>
      )}
    </div>
  );
};

Welcome.propTypes = {
  loggedInUser: PropTypes.string,
  numDrinkingLogs: PropTypes.number,
};

export default Welcome;
