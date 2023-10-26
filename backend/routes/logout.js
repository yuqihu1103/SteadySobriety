// Import required modules and User model
import express from "express";

// Create an Express router
const router = express.Router();

// Logout route
router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Logout successful" });
});

export default router;
