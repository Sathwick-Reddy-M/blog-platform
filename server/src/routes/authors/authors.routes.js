const { getAuthor } = require("../../models/authors/authors.model");
const { BLOGS, getAuthorBlogs } = require("../../models/blogs/blogs.model");
const express = require("express");

const authorsRouter = express.Router();

authorsRouter.get("/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  const author = await getAuthor(authorId);
  res.json(author);
});

authorsRouter.get("/authorBlogs/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  const blogs = await getAuthorBlogs(authorId);
  res.json(blogs);
});

module.exports = { authorsRouter };
