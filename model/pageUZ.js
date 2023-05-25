const mongoose = require("mongoose");

const PageUZ = new mongoose.Schema({
  books: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  pages: {
    type: "string",
    required: true,
  },
  page: {
    type: "string",
    required: true,
  },
  amount: {
    type: "string",
    required: true,
  },
  valute: {
    type: "string",
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("PageUZ", PageUZ);
