const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost, likePost, addComment } = require('../controllers/postController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getPosts).post(protect, createPost);
router.route('/:id').get(getPostById).put(protect, updatePost).delete(protect, deletePost);
router.patch('/:id/like', protect, likePost);
router.post('/:id/comment', protect, addComment);

module.exports = router;
