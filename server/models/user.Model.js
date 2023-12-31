const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  visit: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
