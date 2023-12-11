import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import passport from "passport";
import LocalStrategy from "passport-local";
import { getDatabase, connectToDatabase } from "./db/db.js";
import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import createSoberLogRoute from "./routes/create_log.js";
import readSoberLogRoute from "./routes/read_logs.js";
import deleteSoberLogRoute from "./routes/delete_log.js";
import streakRoute from "./routes/streak.js";
import leaderboardRoute from "./routes/leadboard.js";
import UserModel from "./db/models/users.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "front", "dist")));

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize Passport and sessions
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(
  "local",
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      const passwordMatch = await UserModel.verifyPassword(username, password);

      if (!passwordMatch) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.username); // Assuming '_id' is the user's unique identifier
});

passport.deserializeUser(async (username, done) => {
  const db = getDatabase();
  try {
    const user = await db.collection("users").findOne({ username: username });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Create a middleware function to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  // Passport adds the 'user' object to the request if the user is authenticated
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware or route handler
  }
  // If not authenticated, redirect to login or send an error response
  res
    .status(401)
    .json({ error: "Unauthorized: Please log in to access this resource" });
};

// Use the routes
app.use(deleteSoberLogRoute);
app.post("/register", registerRoute);
app.post("/login", loginRoute);
app.get("/logout", logoutRoute);
app.post("/sober-log", isAuthenticated, createSoberLogRoute);
app.get("/sober-log/:username", isAuthenticated, readSoberLogRoute);
app.get("/streak/:username", isAuthenticated, streakRoute);
app.get("/leaderboard", isAuthenticated, leaderboardRoute);
app.get("/current-user", (req, res) => {
  if (req.isAuthenticated()) {
    // If the user is authenticated, return the username
    res.status(200).json({ username: req.user.username });
  } else {
    // If not authenticated, return an error or an appropriate response
    res.status(401).json({ error: "User not authenticated" });
  }
});

connectToDatabase();
export default app;
