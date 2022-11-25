const fs = require("fs");

if (!fs.existsSync("./build/")) {
  fs.mkdirSync("./build/");
}

fs.writeFileSync("./build/output.js", "noop; 9;");
