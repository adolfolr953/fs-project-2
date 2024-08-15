// const fs = require("fs");
//readFileSync
const fs = require("node:fs");
const data = fs.readFileSync("package.json", "utf8");
console.log(data);
