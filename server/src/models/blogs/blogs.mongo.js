const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorId: {
    type: Number,
    required: true,
  },
  contentHTML: {
    type: String,
    required: true,
  },
  datePublished: {
    type: Date,
    required: true,
  },
  dateUpdated: {
    type: Date,
    required: true,
  },
});

module.exports = new mongoose.model("Blog", blogsSchema);
