import React from "react";
import PropTypes from "prop-types"; // This is used for prop type validation

const Welcome = ({ loggedInUser }) => {
  // Check if the loggedInUser exists and display the personalized welcome message
  return (
    <div>
      {loggedInUser ? (
        <h1>Welcome to Steady Sobriety, {loggedInUser}!</h1>
      ) : (
        <h1>Welcome to Steady Sobriety!</h1> // Default message when no user is logged in
      )}
    </div>
  );
};

Welcome.propTypes = {
  loggedInUser: PropTypes.string,
};

export default Welcome;
