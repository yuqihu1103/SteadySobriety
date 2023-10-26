import { getDatabase } from "../db/db.js";

const SoberLogModel = {
  // CREATE a new sober log
  async createSoberLog(username, date) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.insertOne({ username, date });
  },

  // READ a user's sober logs
  async readSoberLogs(userId) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.find({ userId }).toArray();
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
  async deleteSoberLog(userId, date) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.deleteOne({ userId, date });
  },
};

export default SoberLogModel;
