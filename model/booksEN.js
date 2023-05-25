const mongoose = require("mongoose");

const BooksEN = new mongoose.Schema({
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

module.exports = mongoose.model("BooksEN", BooksEN);
