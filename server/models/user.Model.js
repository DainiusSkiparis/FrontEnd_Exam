const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
<<<<<<< Updated upstream
  password: {
    type: String,
=======
  visit: {
    type: Date,
>>>>>>> Stashed changes
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
