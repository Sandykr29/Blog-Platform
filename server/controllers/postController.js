const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content, tags } = req.body;
  const post = await Post.create({
    title,
    content,
    tags,
    author: req.user._id
  });
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).populate('author', 'username');
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'username').populate('comments.user', 'username');
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  const { title, content, tags } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  post.tags = tags || post.tags;
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  await post.remove();
  res.json({ message: 'Post removed' });
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user._id)) {
    post.likes.push(req.user._id);
  } else {
    post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString());
  }
  await post.save();
  res.json(post);
};

exports.addComment = async (req, res) => {
  const { text } = req.body;
  const post = await Post.findById(req.params.id);
  post.comments.push({ user: req.user._id, text });
  await post.save();
  res.json(post);
};
