import express from "express";
import UserModel from "../db/models/users.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Server-side validation for username, email, and password...

  try {
    // Check if email or username is already registered...
    const existingUserByEmail = await UserModel.getUserByEmail(email);
    const existingUserByUsername = await UserModel.getUserByUsername(username);

    if (existingUserByEmail) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    if (existingUserByUsername) {
      return res.status(400).json({ error: "Username is already registered" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a user object
    const user = {
      username,
      email,
      password: hashedPassword,
    };

    // Create the user in the database
    const userId = await UserModel.createUser(user);

    // Authenticate the user after successful registration
    req.login(user, (err) => {
      if (err) {
        console.error("Login failed after registration:", err);
        return res
          .status(500)
          .json({ error: "Login failed after registration" });
      }
      return res.status(201).json({
        username,
        message: "Registration and Login successful",
      });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Registration failed" });
  }
});

export default router;
