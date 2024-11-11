const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  password: String,
  role: String,
  validated: Boolean,
  token: String,
});

module.exports = mongoose.model("User", userSchema);