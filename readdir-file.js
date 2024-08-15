const fs = require("node:fs");
const readDirectory = fs.readdirSync(
  "/home/adolfo/BACKEND/file-system-project-2/new-dir",
  "utf8"
);
console.log(readDirectory);
