const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = 8080;
const server = http.createServer(app);
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const pwd = process.env.MONGODB_PASSWORD;
const MONGO_URL = `mongodb+srv://sathwick:${pwd}@mongocluster.mtdtrow.mongodb.net/?retryWrites=true&w=majority`;

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
