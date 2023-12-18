const { AUTHORS } = require("../../models/authors.model");
const { BLOGS } = require("../../models/blogs.model");
const express = require("express");

const authorsRouter = express.Router();

authorsRouter.get("/author/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const author = AUTHORS.filter((author) => `${author.id}` === authorId)[0];
  res.json(author);
});

authorsRouter.get("/authorBlogs/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const blogs = BLOGS.filter((blog) => `${blog.authorId}` === authorId);
  res.json(blogs);
});

module.exports = { authorsRouter };
