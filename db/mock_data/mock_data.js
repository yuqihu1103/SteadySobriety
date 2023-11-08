import fs from "fs";
import casual from "casual";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const directory = dirname(__filename);
const userFilename = "mock_users.json"; // JSON file name
const userFilePath = path.join(directory, userFilename); // Full file path
const logFilename = "mock_logs.json"; // JSON file name
const logFilePath = path.join(directory, logFilename); // Full file path

// Function to generate mock users
function generateMockUsers(count) {
  const mockUsers = [];

  for (let i = 0; i < count; i++) {
    const data = {
      username: casual.username,
      email: casual.email,
      password: casual.password,
    };
    mockUsers.push(data);
  }

  return mockUsers;
}

// Function to generate mock logs for users
function generateMockLogs(users) {
  const mockLogs = [];

  users.forEach((user) => {
    let logDate = casual.moment;
    const log = {
      username: user.username,
      date: logDate.toDate(),
    };
    mockLogs.push(log);
  });

  return mockLogs;
}

// Generate mock data with 1000 records
const mockDataCount = 1000;
const mockUsers = generateMockUsers(mockDataCount);
const mockLogs = generateMockLogs(mockUsers);

// Write mock data to a JSON file
fs.writeFileSync(userFilePath, JSON.stringify(mockUsers, null, 2), "utf-8");
console.log(`Mock users has been saved to ${userFilePath}`);

fs.writeFileSync(logFilePath, JSON.stringify(mockLogs, null, 2), "utf-8");
console.log(`Mock logs has been saved to ${logFilePath}`);
