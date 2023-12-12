import React, { useState } from "react";
import "../styles/Register.css"; // Import the Register component's CSS file
import PropTypes from "prop-types";

function Register({ setActiveComponent, setLoggedInUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State to hold password error

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check for password length and set password error if it's too short
    if (name === "password" && value.length > 0 && value.length < 6) {
      setPasswordError("Password is too short.");
    } else {
      setPasswordError(""); // Clear the password error if the condition is not met
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError(""); // Clear previous errors

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("Registration successful:", data);
        setLoggedInUser(data.username);
        console.log(`loggedin user is ${data.username}`);
      } else {
        setRegisterError(data.error);
      }
    } catch (error) {
      setRegisterError("An error occurred while registering.");
      console.error("There was an error:", error);
    }
  };

  const onLoginClicked = () => {
    setActiveComponent("Login");
  };

  return (
    <div className="register-container">
      {" "}
      <h2 className="register-header">Register</h2>{" "}
      <p className="navigation-message">
        Already have an account?{" "}
        <a onClick={onLoginClicked} className="navigation">
          Login
        </a>{" "}
        now!
      </p>
      <div className="register-error">{registerError}</div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength={3}
            placeholder="Username"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="Password"
          />
          {/* Conditionally render the password error message */}
          {passwordError && (
            <div className="register-error">{passwordError}</div>
          )}
        </div>
        <button type="submit" className="register-button">
          Register
        </button>{" "}
        {/* Add a class name for the button */}
      </form>
    </div>
  );
}

Register.propTypes = {
  setLoggedInUser: PropTypes.func.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Register;
