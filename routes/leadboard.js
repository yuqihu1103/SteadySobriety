import express from "express";
import UserModel from "../db/models/users.js";

const router = express.Router();

// Leaderboard route
router.get("/leaderboard", async (req, res) => {
  try {
    // Get a list of users with their streaks
    const users = await UserModel.getAllUsersWithStreaks();

    // Sort the users by streak in descending order
    users.sort((a, b) => b.streak - a.streak);

    // Return the top 50 users with their usernames and streaks
    const top50 = users
      .slice(0, 50)
      .map((user) => ({ username: user.username, streak: user.streak }));

    // Find the user's rank in the leaderboard
    const currentUser = users.find(
      (user) => user.username === req.user.username
    );
    const currentUserRank = users.indexOf(currentUser) + 1;

    res.json({ top50, currentUserRank });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
