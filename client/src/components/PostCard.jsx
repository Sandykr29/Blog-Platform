import { useState } from "react";
import axios from "axios";

const PostCard = ({ post }) => {
  const [comments, setComments] = useState(post.comment || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    try {
      const response = await axios.patch("/post/comment", {
        PostId: post._id,
        comment: newComment,
        fName: "John", // Add dynamic user name
        lName: "Doe"   // Add dynamic user last name
      });
      setComments([...comments, response.data.comment]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment", err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{post.caption}</h3>
      <p>{post.post}</p>
      <div className="mt-4">
        <h4 className="font-bold">Comments:</h4>
        <div className="space-y-2">
          {comments.map((comment, idx) => (
            <div key={idx} className="bg-gray-100 p-2 rounded-md">
              <p><strong>{comment.fName} {comment.lName}</strong>: {comment.comment}</p>
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
        <button onClick={handleAddComment} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default PostCard;
