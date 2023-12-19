const mongoose = require("mongoose");

const draftsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  contentHTML: {
    type: String,
    required: true,
  },
  authorId: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  dateUpdated: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Draft", draftsSchema);
