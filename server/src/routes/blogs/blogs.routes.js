const { BLOGS } = require("../../models/blogs.model");
const express = require("express");
const blogsRouter = express.Router();

blogsRouter.get("/blogs", (req, res) => {
  res.json(BLOGS);
});

blogsRouter.get("/blog/:blogId", (req, res) => {
  const blogId = req.params.blogId;
  const blog = BLOGS.filter((blog) => `${blog.id}` === blogId)[0];
  res.json(blog);
});

module.exports = { blogsRouter };
