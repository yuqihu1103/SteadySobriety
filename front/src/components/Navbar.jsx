import React from "react";
import PropTypes from "prop-types";
import "../styles/Navbar.css";

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

  const handleLogoClick = () => {
    if (loggedInUser) {
      showDashboard();
    } else {
      showIntro();
    }
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          id="logo"
          onClick={handleLogoClick}
        >
          <img
            src="/steady-sobriety-favicon.png"
            alt="Logo of Steady Sobriety"
            width="45"
            height="45"
          />
          Steady Sobriety
        </a>
        <ul>
          <li className="nav-item">
            <a href="#" onClick={showResources}>
              Resources
            </a>
          </li>
          {loggedInUser ? (
            <>
              <li className="nav-item">
                <a href="#" onClick={showDashboard}>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a href="#" onClick={showLogin}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={showRegister}>
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  loggedInUser: PropTypes.object, // if loggedInUser can be null/undefined, don't use isRequired
  handleLogout: PropTypes.func.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Navbar;
