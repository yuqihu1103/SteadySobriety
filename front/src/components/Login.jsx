import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Login.css";
import InformationPopover from "./InformationPopover";

const infoContent = (
  <ul>
    <li>Choose Username or Email to Login</li>
    <li>Username cannot less than 3 characters.</li>
    <li>Password cannot less than 6 characters.</li>
  </ul>
);

function Login({ setActiveComponent, setLoggedInUser }) {
  const [formData, setFormData] = useState({
    credential: "", // This can be either username or email
    password: "",
  });
  const [credentialType, setCredentialType] = useState("Username"); // Default to "Username"
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCredentialTypeChange = (e) => {
    setCredentialType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          credentialType,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Login successful:", data);
        setLoggedInUser(data.username);
        console.log(`loggedin user is ${data.username}`);
      } else {
        console.error("Login error:", data.error);
        setLoginError(data.error);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const onRegisterClicked = () => {
    setActiveComponent("Register");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2 className="login-title">Login</h2>
        <InformationPopover>{infoContent}</InformationPopover>
      </div>
      <p className="navigation-message">
        Do not have an account?{" "}
        <a onClick={onRegisterClicked} className="navigation">
          Register
        </a>{" "}
        now!
      </p>
      <div className="login-error">{loginError}</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="credentialType">Login with:</label>
          <select
            name="credentialType"
            value={credentialType}
            onChange={handleCredentialTypeChange}
          >
            <option value="Username">Username</option>
            <option value="Email">Email</option>
          </select>
        </div>
        <div>
          <label>{credentialType}:</label>
          <input
            type="text"
            name="credential"
            value={formData.credential}
            onChange={handleChange}
            placeholder={credentialType}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setLoggedInUser: PropTypes.func.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Login;
