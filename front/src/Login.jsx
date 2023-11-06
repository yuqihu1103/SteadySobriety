import React, { useState } from "react";

function Login({ setLoggedInUser }) {
  const [formData, setFormData] = useState({
    credential: "", // This can be either username or email
    password: "",
  });
  const [credentialType, setCredentialType] = useState("Username"); // Default to "Username"

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
        localStorage.setItem("loggedInUser", JSON.stringify(data.username));
        console.log(`loggedin user set to ${data.username}`);
      } else {
        console.error("Login error:", data.error);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
