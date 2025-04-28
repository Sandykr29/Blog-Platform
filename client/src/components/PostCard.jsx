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
      <h3 className="text-xl font-semibold text-white">{post.title || "Untitled Post"}</h3> {/* Explicit text color */}
      <p className="text-gray-300">{post.content || "No content available"}</p> {/* Explicit text color */}
      <div className="mt-4">
        <h4 className="font-bold text-gray-400">Tags:</h4> {/* Explicit text color */}
        <p className="text-gray-300">{post.tags?.join(", ") || "No tags available"}</p> {/* Explicit text color */}
        <h4 className="font-bold mt-4 text-gray-400">Comments:</h4> {/* Explicit text color */}
        <div className="space-y-2">
          {comments.map((comment, idx) => (
            <div key={idx} className="bg-gray-100 p-2 rounded-md">
              <p className="text-gray-800">
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
          className="p-2 rounded border mt-4 w-full text-gray-800" // Explicit text color
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
