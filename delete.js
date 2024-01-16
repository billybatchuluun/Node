const fs = require("fs");

const deleteData = (id) => {
  const json = fs.readFileSync("input.json", "utf-8");
  const data = JSON.parse(json);
  const newArray = data.filter((item) => {
    return item.id !== id;
  });
  fs.writeFileSync("input.json", JSON.stringify(newArray));
  return newArray;
};
exports.deleteData = deleteData;
