// Import required modules and SoberLogs model
import express from "express";
import SoberLogsModel from "../db/models/sober_logs.js";
import UserModel from "../db/models/users.js";

// Create an Express router
const router = express.Router();

router.get("/sober-log/:username", async (req, res) => {
  const { username } = req.params;

  const user = await UserModel.getUserByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const userLogHistory = await SoberLogsModel.readSoberLogs(username);

  return res.status(200).json({
    message: "Log history retrieved.",
    userLogHistory: userLogHistory,
  });
});

export default router;
