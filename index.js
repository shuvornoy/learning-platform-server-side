const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const coursesData = require("./Data/course.json");

app.get("/", (req, res) => {
  res.send(" server is running");
});

app.get("/courses", (req, res) => {
  res.send(coursesData);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const getSingleData = coursesData?.find((p) => p.id == id);
  res.send(getSingleData);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
