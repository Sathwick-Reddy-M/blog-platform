const {
  USERS,
  getUserByEmail,
  insertUser,
} = require("../../models/users/users.model");
const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/users", async (req, res) => {
  const userData = req.body;
  await insertUser(userData);
  res.send("Update Successful");
});

usersRouter.get("/users/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
  const user = await getUserByEmail(userEmail);
  res.json(user);
});

module.exports = { usersRouter };
