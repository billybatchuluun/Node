const fs = require("fs");
const readUsers = (res) => {
  const json = fs.readFileSync("input.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};

exports.readUsers = readUsers;
