//Zhiqian Zhang
import { getDatabase } from "../db.js";

const SoberLogModel = {
  // CREATE a new sober log
  async createSoberLog(username, date) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");

    // Check if a log with the same date already exists for the user
    const existingLog = await soberLogsCollection.findOne({ username, date });
    if (existingLog) {
      throw new Error("Date already recorded");
    }

    // If no existing log is found, insert a new log
    return soberLogsCollection.insertOne({ username, date });
  },

  // READ a user's sober logs sorted by date (latest to oldest)
  async readSoberLogs(username) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection
      .find({ username })
      .sort({ date: -1 }) // Sort by date in descending order (latest to oldest)
      .toArray();
  },

  // UPDATE a sober log (assuming by date)
  async updateSoberLog(userId, oldDate, newDate) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.updateOne(
      { userId, date: oldDate },
      { $set: { date: newDate } }
    );
  },

  // DELETE a sober log
  async deleteSoberLog(username, date) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.deleteOne({ username, date });
  },
};

export default SoberLogModel;
