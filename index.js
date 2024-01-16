// const { create } = require("domain");
// const express = require("express");
// const { restart } = require("nodemon");
// const fs = require("fs");
const express = require("express");
const multer = require(`multer`);
const upload = multer({ dest: "uploads/" });
const { readUsers } = require("./user");
const { writeUsers } = require("./write");
const { createData } = require("./create");
const { deleteData } = require("./delete");

const cors = require("cors");

const port = 8000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Hello Bilguun");
});

app.get("/users", (req, res) => {
  const users = readUsers();
  res.send(users);
});
app.post("/posts", (req, res) => {
  const post = createData({
    id: 12,
    task_name: "Billy",
    task_date: "8/30/2023",
    team_name: "LetsGo",
  });
  res.send(post);
});
app.delete("/deletes", (req, res) => {
  const delet = deleteData(10);
  res.send(delet);
});
app.get("/cars", (req, res) => {
  const cars = writeUsers();
  res.send(cars);
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});

const middleware = (req, res, next) => {
  console.log(req);
};
