import { useState } from "react";
import axios from "axios";

const PostCard = ({ post }) => {
  console.log("Post object:", post); // Debugging

  const [comments, setComments] = useState(post.comments || []); // Use `comments` from the post object
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    try {
      const response = await axios.patch("/post/comment", {
        PostId: post._id,
        comment: newComment,
        fName: "John", // Replace with dynamic user data
        lName: "Doe",  // Replace with dynamic user data
      });
      setComments([...comments, response.data.comment]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div className="bg-black p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{post.title || "Untitled Post"}</h3> {/* Fallback for missing title */}
      <p>{post.content || "No content available"}</p> {/* Fallback for missing content */}
      <div className="mt-4">
        <h4 className="font-bold">Tags:</h4>
        <p>{post.tags?.join(", ") || "No tags available"}</p> {/* Render tags */}
        <h4 className="font-bold mt-4">Comments:</h4>
        <div className="space-y-2">
          {comments.map((comment, idx) => (
            <div key={idx} className="bg-gray-100 p-2 rounded-md">
              <p>
                <strong>{comment.fName} {comment.lName}</strong>: {comment.comment}
              </p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="p-2 rounded border mt-4 w-full"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default PostCard;
