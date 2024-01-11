const fs = require("fs");
const http = require("http");
const { stringify } = require("querystring");
const PORT = 7000;
const server = http.createServer((req, res) => {
  readUsers(res);
});

const readUsers = (res) => {
  fs.readFile("input.json", "utf-8", (err, text) => {
    if (err) {
      return console.error(err);
    }
    const users = JSON.parse(text);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  });
};

server.listen(PORT, () => {
  console.log(
    `server is running on hasUncaughtExceptionCaptureCallback; http://localhost:${PORT}`
  );
});
