//Zhiqian Zhang
import express from "express";
import SoberLogModel from "../db/models/sober_logs.js";

const router = express.Router();

// PUT route for creating a new sober log
router.post("/sober-log", async (req, res) => {
  const { username, date } = req.body;

  // Server-side validation of userId and date
  if (!username || !date) {
    return res.status(400).json({ error: "Both userId and date are required" });
  }

  try {
    const newLog = await SoberLogModel.createSoberLog(username, date);
    res.status(201).json({
      message: "Sober log created successfully",
      logId: newLog.insertedId,
    });
  } catch (error) {
    if (error.message === "Date already recorded") {
      return res.status(400).json({ error: "Date already recorded" });
    }
    console.error("Error creating sober log:", error);
    res.status(500).json({ error: "Failed to create sober log" });
  }
});

export default router;
