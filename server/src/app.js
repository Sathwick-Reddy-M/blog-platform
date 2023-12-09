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

app.get("/blog/:blogId", (req, res) => {
  const blogId = req.params.blogId;
  const blog = BLOGS.filter((blog) => `${blog.id}` === blogId)[0];
  res.json(blog);
});

app.get("/author/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const author = AUTHORS.filter((author) => `${author.id}` === authorId)[0];
  res.json(author);
});

app.get("/authorBlogs/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const blogs = BLOGS.filter((blog) => `${blog.authorId}` === authorId);
  res.json(blogs);
});

module.exports = app;
