const express = require("express");
const { createPost, getUserPosts, getAllPosts, updatePost, deletePost, addComment } = require("../controllers/postController");
const { auth } = require("../middlewares/authMiddleware");

const postRouter = express.Router();

postRouter.post("/create", auth, createPost);
postRouter.get("/user/:id", auth, getUserPosts);
postRouter.get("/", getAllPosts);
postRouter.patch("/update", auth, updatePost);
postRouter.delete("/delete/:id", auth, deletePost);
postRouter.patch("/comment", auth, addComment);

module.exports = { postRouter };
