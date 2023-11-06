// Import necessary modules and the SoberLogModel
import express from "express";
import SoberLogModel from "../db/models/sober_logs.js";

// Create an Express router
const router = express.Router();

// Define a route to calculate the streak
router.get("/streak/:username", async (req, res) => {
  const { username } = req.params;

  try {
    // Retrieve the user's sober logs
    const soberLogs = await SoberLogModel.readSoberLogs(username);

    if (soberLogs.length === 0) {
      // If there are no sober logs, the user hasn't logged any drinks yet
      res.status(200).json({ streak: 0, message: "No sober logs found." });
    } else {
      // Sort the sober logs by date in descending order
      soberLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Calculate the streak
      const today = new Date();
      const lastDrinkDate = new Date(soberLogs[0].date);

      const timeDifference = today - lastDrinkDate;
      const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      res.status(200).json({
        streak: daysPassed,
        message: "Streak calculated successfully.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the router for use in your main application file
export default router;
