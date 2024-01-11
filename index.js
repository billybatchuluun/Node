const fs = require("node:fs");

fs.readFile("Input .json", "utf8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
