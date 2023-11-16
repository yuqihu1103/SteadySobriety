/*This module defines the User model and provides CRUD (Create, Read - get by username or email, 
Update, Delete) operations for managing user data in MongoDB. It also includes functions for 
password hashing and password verification.*/
//Yuqi Hu
import { ObjectId } from "mongodb";
import { getDatabase } from "../db.js";
import bcrypt from "bcryptjs";
import SoberLogModel from "./sober_logs.js";

// Create a User model
const UserModel = {
  async createUser(user) {
    const db = getDatabase();

    const newUser = {
      ...user,
    };

    const result = await db.collection("users").insertOne(newUser);
    return result.insertedId;
  },

  async getUserByUsername(username) {
    const db = getDatabase();
    return db.collection("users").findOne({ username });
  },

  async getUserByEmail(email) {
    const db = getDatabase();
    return db.collection("users").findOne({ email });
  },

  async updateUser(id, updatedUser) {
    const db = getDatabase();
    const result = await db
      .collection("users")
      .updateOne({ _id: ObjectId(id) }, { $set: updatedUser });

    return result.modifiedCount;
  },

  async deleteUser(id) {
    const db = getDatabase();
    const result = await db
      .collection("users")
      .deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
  },

  async verifyPassword(username, password) {
    const db = getDatabase();
    const user = await db.collection("users").findOne({ username });

    if (!user) {
      return false; // User not found
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    return passwordMatch;
  },

  // for leaderboard
  async calculateUserStreak(user) {
    const soberLogs = await SoberLogModel.readSoberLogs(user.username);
    if (soberLogs.length === 0) {
      return { username: user.username, streak: 0 };
    }

    const lastLogDate = new Date(soberLogs[0].date);
    const today = new Date();
    const daysDifference = Math.floor(
      (today - lastLogDate) / (1000 * 60 * 60 * 24)
    );

    return { username: user.username, streak: daysDifference };
  },

  async getAllUsersWithStreaks() {
    const db = getDatabase();
    const users = await db.collection("users").find().toArray();

    const usersWithStreaks = await Promise.all(users.map(calculateUserStreak));

    return usersWithStreaks;
  },
};

async function calculateUserStreak(user) {
  const soberLogs = await SoberLogModel.readSoberLogs(user.username);
  if (soberLogs.length === 0) {
    return { username: user.username, streak: 0 };
  }

  const lastLogDate = new Date(soberLogs[0].date);
  const today = new Date();
  const daysDifference = Math.floor(
    (today - lastLogDate) / (1000 * 60 * 60 * 24)
  );

  return { username: user.username, streak: daysDifference };
}

export default UserModel;
