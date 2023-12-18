const blogsDB = require("./blogs.mongo");

async function getAuthorBlogs(authorId) {
  const blogs = await blogsDB.find({ authorId: authorId });
  return blogs;
}

async function getBlogs() {
  const blogs = await blogsDB.find({});
  return blogs;
}

async function getBlog(blogId) {
  const blog = await blogsDB.findOne({ id: blogId });
  return blog;
}

module.exports = {
  getAuthorBlogs,
  getBlogs,
  getBlog,
};
