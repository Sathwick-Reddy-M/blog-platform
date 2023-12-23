const {
  getBlogs,
  getBlog,
  createBlog,
} = require("../../models/blogs/blogs.model");
const express = require("express");
const blogsRouter = express.Router();

blogsRouter.get("/all", async (req, res) => {
  const blogs = await getBlogs();
  res.json(blogs);
});

blogsRouter.get("/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const blog = await getBlog(blogId);
  res.json(blog);
});

blogsRouter.post("/", async (req, res) => {
  const blogObj = req.body;
  const response = await createBlog(blogObj);
  res.send(response);
});

module.exports = { blogsRouter };
