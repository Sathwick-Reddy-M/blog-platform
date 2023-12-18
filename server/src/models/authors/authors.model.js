const authorsDB = require("./authors.mongo");

async function getAuthor(authorId) {
  const author = await authorsDB.findOne({ id: authorId });
  return author;
}

module.exports = { getAuthor };
