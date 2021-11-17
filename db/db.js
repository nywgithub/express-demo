const fs = require("fs");
const promisify = require("../utils");
const path = require("path");

const readFile = promisify(fs.readFile);

const dbPath = path.join(__dirname, "./db.json");
exports.getDb = async () => {
  const data = await readFile(dbPath, "utf8");
  return JSON.parse(data);
};
