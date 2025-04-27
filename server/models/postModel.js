const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  caption: { type: String, required: true },
  post: { type: String, required: true },
  comment: [
    {
      firstName: String,
      lastName: String,
      comment: String,
    }
  ],
}, {
  timestamps: true,
});

const PostModel = mongoose.model("Post", postSchema);

module.exports = { PostModel };
