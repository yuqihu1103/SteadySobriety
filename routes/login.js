// Import required modules and User model
import express from "express";
import passport from "passport";
import UserModel from "../db/models/users.js";

// Create an Express router
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { credentialType, credential, password } = req.body;

  let user;
  if (credentialType === "Username") {
    user = await UserModel.getUserByUsername(credential);
  } else if (credentialType === "Email") {
    user = await UserModel.getUserByEmail(credential);
  } else {
    return res.status(400).json({ error: "Invalid credential type" });
  }

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  req.body.username = user.username;
  req.body.password = password;

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ error: info.message });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Login failed" });
      }
      return res
        .status(200)
        .json({ username: user.username, message: "Login successful" });
    });
  })(req, res);
});

export default router;
