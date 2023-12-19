const express = require("express");
const cors = require("cors");
const { authorsRouter } = require("./routes/authors/authors.routes");
const { blogsRouter } = require("./routes/blogs/blogs.routes");
const { usersRouter } = require("./routes/users/users.routes");
const { draftsRouter } = require("./routes/drafts/drafts.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", blogsRouter);
app.use("/", authorsRouter);
app.use("/", usersRouter);
app.use("/", draftsRouter);

module.exports = app;
