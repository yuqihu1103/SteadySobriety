import React from "react";

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

  return (
    <nav>
      <ul>
        {loggedInUser ? (
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
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

export default Navbar;
