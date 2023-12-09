const express = require("express");
const cors = require("cors");
const { BLOGS } = require("../src/models/blogs.model");
const { AUTHORS } = require("../src/models/authors.model");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/blogs", (req, res) => {
  res.json(BLOGS);
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  const blog = BLOGS.filter((blog) => `${blog.id}` === id)[0];
  res.json(blog);
});

app.get("/author/:id", (req, res) => {
  const id = req.params.id;
  const author = AUTHORS.filter((author) => `${author.id}` === id)[0];
  res.json(author);
});

module.exports = app;
