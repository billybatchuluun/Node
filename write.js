const fs = require("fs");
const writeUsers = (res) => {
  const json = fs.readFileSync("cars.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};
exports.writeUsers = writeUsers;
