const fs = require("node:fs");

const createUsers = (data) => {
  fs.readFile("Cars.json", "utf-8", function (err, data) {
    if (err) {
      return console.error(err);
    }
    const previousData = JSON.parse(json);
    previousData.push(data);
    console.log(previousData);
  });
};
