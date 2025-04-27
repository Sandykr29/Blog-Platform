const { PostModel } = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const post = await PostModel.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ msg: "Failed to create post" });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({ userId: req.params.id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch posts" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch posts" });
  }
};

const updatePost = async (req, res) => {
  const { id, caption, post } = req.body;

  try {
    await PostModel.updateOne({ _id: id }, { caption, post });
    const updatedPosts = await PostModel.find({ userId: req.body.userId }).sort({ createdAt: -1 });
    res.status(200).json(updatedPosts);
  } catch (error) {
    res.status(500).json({ msg: "Failed to update post" });
  }
};

const deletePost = async (req, res) => {
  try {
    await PostModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Failed to delete post" });
  }
};

const addComment = async (req, res) => {
  const { postId, firstName, lastName, comment } = req.body;

  try {
    const updatedPost = await PostModel.updateOne(
      { _id: postId },
      {
        $push: {
          comment: {
            firstName,
            lastName,
            comment,
          },
        },
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ msg: "Failed to add comment" });
  }
};

module.exports = { createPost, getUserPosts, getAllPosts, updatePost, deletePost, addComment };
