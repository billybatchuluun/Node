const fs = require("fs");

const createData = (create) => {
  const json = fs.readFileSync("input.json", "utf-8");
  const data = JSON.parse(json);
  data.push(create);
  fs.writeFileSync("input.json", JSON.stringify(data));
  return data;
};
// exports.createData = createData;
exports.createData = createData;
