const express = require("express");
const cors = require("cors");
const { authorsRouter } = require("./routes/authors/authors.routes");
const { blogsRouter } = require("./routes/blogs/blogs.routes");
const { usersRouter } = require("./routes/users/users.routes");
const { draftsRouter } = require("./routes/drafts/drafts.routes");

const app = express();
const API_VERSION = "/api/v1";

app.use(cors());
app.use(express.json());

app.use(`${API_VERSION}/blogs`, blogsRouter);
app.use(`${API_VERSION}/authors`, authorsRouter);
app.use(`${API_VERSION}/users`, usersRouter);
app.use(`${API_VERSION}/drafts`, draftsRouter);

module.exports = app;
