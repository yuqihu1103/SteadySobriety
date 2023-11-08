import fs from "fs";
import casual from "casual";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const directory = dirname(__filename);
const userFilename = "mock_users.json"; // JSON file name
const userFilePath = path.join(directory, userFilename); // Full file path

// Function to generate mock data
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

// Generate mock data with 1000 records
const mockDataCount = 1000;
const mockUsers = generateMockUsers(mockDataCount);

// Write mock data to a JSON file
fs.writeFileSync(userFilePath, JSON.stringify(mockUsers, null, 2), "utf-8");
console.log(`Mock users has been saved to ${userFilePath}`);
