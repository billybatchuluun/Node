const fs = require("fs");
const http = require("http");
// const { url } = require("node:inspector");

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  if (reqUrl == "/") {
    return (
      res.writeHead(200, { "Content-Type": "text/html" }),
      res.end("<h1>Welcome dude</h1>")
    );
  }
  if (reqUrl == "/users") {
    return fs.readFile("input.json", "utf-8", (err, json) => {
      if (err) console.log("error:", err);
      const data = JSON.parse(json);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
  }
  if (reqUrl == "/cars") {
    return fs.readFile("cars.json", "utf-8", (err, json) => {
      if (err) console.log("error:", err);
      const data = JSON.parse(json);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
  }
});

// const createUsers = (data) => {
//   fs.readFile("Cars.json", "utf-8", function (err, data) {
//     if (err) {
//       return console.error(err);
//     }
//     const previousData = JSON.parse(json);
//     previousData.push(data);
//     console.log(previousData);
//   });
// };
const PORT = 7000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
