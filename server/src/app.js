const express = require("express");
const cors = require("cors");
const { BLOGS } = require("../src/models/blogs.model");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json(BLOGS);
});

module.exports = app;
