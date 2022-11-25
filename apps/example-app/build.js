const fs = require("fs");

fs.mkdirSync("./build/");
fs.writeFileSync("./build/output.js", "noop;");
