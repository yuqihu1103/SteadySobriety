// Import required modules and SoberLogs model
import express from "express";
import SoberLogsModel from "../models/sober_logs.js";
import UserModel from "../models/users.js";

// Create an Express router
const router = express.Router();

// Login route
router.get("/sober-log", async (req, res) => {
  const { username } = req.body;

  const user = await UserModel.getUserByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const userLogHistory = await SoberLogsModel.readSoberLogs(username);

  return res.status(200).json({
    message: "Log history retrieevef",
    userLogHistory: userLogHistory,
  });
});

export default router;
