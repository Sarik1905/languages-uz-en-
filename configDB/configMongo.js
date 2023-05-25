const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`Connect database : ${process.env.MONGO_URI}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
