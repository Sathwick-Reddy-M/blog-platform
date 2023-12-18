const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = 8080;
const server = http.createServer(app);
const MONGO_URL =
  "mongodb+srv://sathwick:<YOUR_MONGO_DB_PASSWORD>@mongocluster.mtdtrow.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
  });
}

startServer();
