const mongoose = require("mongoose");
const DB = require("../common/constants/dataBase.js");

const connectDb = async () => {
  try {
    await mongoose.connect(DB.MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
