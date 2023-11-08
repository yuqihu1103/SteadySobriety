import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ loggedInUser, handleLogout, setActiveComponent }) {
  // Define functions to change the active component
  const showIntro = () => {
    setActiveComponent("Intro");
  };

  const showLogin = () => {
    setActiveComponent("Login");
  };

  const showRegister = () => {
    setActiveComponent("Register");
  };

  const showResources = () => {
    setActiveComponent("Resources");
  };

  const showDashboard = () => {
    setActiveComponent("Dashboard");
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={showResources}>
            Resources
          </a>
        </li>
        {loggedInUser ? (
          <>
            <li>
              <a href="#" onClick={showDashboard}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="#" onClick={showIntro}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={showLogin}>
                Login
              </a>
            </li>
            <li>
              <a href="#" onClick={showRegister}>
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  loggedInUser: PropTypes.object, // if loggedInUser can be null/undefined, don't use isRequired
  handleLogout: PropTypes.func.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Navbar;
