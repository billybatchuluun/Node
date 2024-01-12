const { create } = require("domain");
const express = require("express");
const { restart } = require("nodemon");
const fs = require("fs");

const port = 8000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Bilguun");
});

app.get("/user", (req, res) =>
  res.send([
    {
      id: 11,
      first_name: "Billy",
      last_name: "Batch",
      email: "Billy@google.co.jp",
      gender: "Male",
      ip_address: "211.224.86.93",
    },
  ])
);

app.post("/reader", (req, res) => {
  res.send({
    id: 19,
    first_name: "Billy",
    last_name: "Batch",
    email: "Billy@google.co.jp",
    gender: "Male",
    ip_address: "211.224.86.94",
  });

  create({
    id: 18,
    first_name: "Bilguun",
    last_name: "Batchuluun",
    email: "Billy@google.co.jp",
    gender: "Male",
    ip_address: "211.224.86.95",
  });
});

// const readUsers = (res) => {
//   fs.readFile("input.json", "utf-8", (err, text) => {
//     if (err) {
//       return console.error(err);
//     }
//     const users = JSON.parse(text);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   });
// };

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
