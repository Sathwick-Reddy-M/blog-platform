const { USERS } = require("../../models/users.model");
const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/users", (req, res) => {
  const userData = req.body;
  USERS.push(userData);
  res.send("Update Successful");
});

usersRouter.get("/users/:userEmail", (req, res) => {
  const userEmail = req.params.userEmail;
  const user = USERS.filter((user) => `${user.userEmail}` === userEmail)[0];
  res.json(user);
});

module.exports = { usersRouter };
