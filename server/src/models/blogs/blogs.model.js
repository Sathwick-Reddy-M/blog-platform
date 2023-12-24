const blogsDB = require("./blogs.mongo");
const { getPagination } = require("../../utils/query");

async function getAuthorBlogs(authorId, query) {
  const { skip, limit } = getPagination(query);
  const blogs = await blogsDB
    .find({ authorId: authorId })
    .skip(skip)
    .limit(limit);
  return blogs;
}

async function getBlogs(query) {
  const { skip, limit } = getPagination(query);
  const blogs = await blogsDB.find({}).skip(skip).limit(limit);
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
