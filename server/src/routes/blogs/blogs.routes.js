const { getBlogs, getBlog } = require("../../models/blogs/blogs.model");
const express = require("express");
const blogsRouter = express.Router();

blogsRouter.get("/blogs", async (req, res) => {
  const blogs = await getBlogs();
  res.json(blogs);
});

blogsRouter.get("/blog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const blog = await getBlog(blogId);
  res.json(blog);
});

module.exports = { blogsRouter };
