//Zhiqian Zhang
import { getDatabase } from "../db.js";

const SoberLogModel = {
  // CREATE a new sober log
  async createSoberLog(username, date) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.insertOne({ username, date });
  },

  // READ a user's sober logs
  async readSoberLogs(username) {
    const db = getDatabase();
    const soberLogsCollection = db.collection("sober_logs");
    return soberLogsCollection.find({ username }).toArray();
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
