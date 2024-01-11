const fs = require("node:fs");

// const content = "Some other content!";

fs.writeFile("/Users/23LP6327/desktop/node/Input.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(content);
});
