const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  authorId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", usersSchema);
