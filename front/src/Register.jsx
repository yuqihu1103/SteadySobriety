import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
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
    setError(""); // Clear previous errors

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
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred while registering.");
      console.error("There was an error:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* ... other form fields */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
          {/* Conditionally render the password error message */}
          {passwordError && (
            <div className="password-error">{passwordError}</div>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
