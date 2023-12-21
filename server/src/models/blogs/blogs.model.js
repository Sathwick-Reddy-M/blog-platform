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

async function getNewBlogId() {
  const blogs = await blogsDB.find();
  let maxId = 0;
  blogs.forEach(({ id }) => (maxId = Math.max(maxId, id)));
  return maxId + 1;
}

async function createBlog(blogObj) {
  const response = await blogsDB.create({
    id: await getNewBlogId(),
    ...blogObj,
  });
  return response;
}

module.exports = {
  getAuthorBlogs,
  getBlogs,
  getBlog,
  createBlog,
};
