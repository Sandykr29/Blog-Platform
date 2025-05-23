const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  isAdmin: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
