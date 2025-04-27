import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentSection = () => {
  const { postId } = useParams(); // Get the postId from URL
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments for the specific post
    axios.get(`/api/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments', error));
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) return; // Don't submit if comment is empty

    try {
      // Post new comment to the backend
      const user = JSON.parse(localStorage.getItem('profile'));
      const commentData = {
        content: newComment,
        userId: user._id,
        postId,
      };

      await axios.post(`/api/posts/${postId}/comments`, commentData);
      setNewComment(''); // Clear input field
      setComments((prevComments) => [...prevComments, commentData]); // Update comments list with new comment
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="my-6">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border-b py-2">
            <p className="text-lg font-medium">{comment.username}</p>
            <p className="text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button type="submit" className="mt-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-indigo-600">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
