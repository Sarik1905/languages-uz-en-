const mongoose = require("mongoose");

const BooksUZ = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  pages: {
    type: "number",
    required: true,
  },
  amount: {
    type: "number",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("BooksUZ", BooksUZ);
