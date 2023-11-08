import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Welcome.css";

const Welcome = ({ loggedInUser, numDrinkingLogs }) => {
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    // Function to fetch the user's streak from the backend
    const fetchStreak = async () => {
      if (loggedInUser) {
        try {
          const response = await fetch(`/streak/${loggedInUser}`);
          const data = await response.json();

          if (response.ok) {
            let message = "Log drinking days to start"; // Default message
            if (data.message !== "No sober logs found.") {
              message = `You have been sober for ${data.streak} days!`;
            }
            setUserMessage(message);
          } else {
            throw new Error(data.error || "Error fetching streak.");
          }
        } catch (error) {
          console.error("Fetch streak error:", error);
        }
      }
    };

    fetchStreak();
  }, [loggedInUser, numDrinkingLogs]); // Dependency array ensures this effect runs when loggedInUser changes

  return (
    <div className="welcome-container">
      {loggedInUser ? (
        <>
          <h1 className="welcome-username">
            Welcome to Steady Sobriety, {loggedInUser}!
          </h1>
          <h2 className="welcome-message">{userMessage}</h2>
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
