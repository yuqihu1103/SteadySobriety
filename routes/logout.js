import express from "express";

const router = express.Router();

// Logout route
router.get("/logout", (req, res) => {
  // Passport's req.logout() method is used to terminate the login session
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }

    // Respond with a message indicating successful logout
    res.status(200).json({ message: "Logout successful" });
  });
});

export default router;
