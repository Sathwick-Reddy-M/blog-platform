const usersDb = require("./users.mongo");
const authorsDb = require("../authors/authors.mongo");

async function getUserByEmail(userEmail) {
  const user = await usersDb.findOne({ userEmail: userEmail });
  return user;
}

async function insertUser(userData) {
  const maxAuthorId = await getLatestAuthorId();
  const result = await usersDb.create({
    ...userData,
    authorId: maxAuthorId + 1,
  });
  return result;
}

async function getLatestAuthorId() {
  const authors = await authorsDb.find();
  let maxId = 0;
  authors.forEach(({ id }) => (maxId = Math.max(maxId, id)));
  return maxId;
}

module.exports = {
  getUserByEmail,
  insertUser,
};
