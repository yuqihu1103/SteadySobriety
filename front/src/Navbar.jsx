import React from "react";

function Navbar({ loggedInUser, handleLogout }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {loggedInUser ? (
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
