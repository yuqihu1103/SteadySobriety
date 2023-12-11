import express from "express";
import SoberLogModel from "../db/models/sober_logs.js";

const router = express.Router();

// DELETE route for deleting a sober log
router.delete("/sober-log/:username", async (req, res) => {
  const { username } = req.params;
  const { date } = req.body;

  // Server-side validation of username and date
  if (!username || !date) {
    return res
      .status(400)
      .json({ error: "Both username and date are required" });
  }

  try {
    const result = await SoberLogModel.deleteSoberLog(username, date);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Log not found" });
    }
    res.status(200).json({ message: "Sober log deleted successfully" });
  } catch (error) {
    console.error("Error deleting sober log:", error);
    res.status(500).json({ error: "Failed to delete sober log" });
  }
});

export default router;
