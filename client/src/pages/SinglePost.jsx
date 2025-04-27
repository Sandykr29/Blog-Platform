import { useEffect, useState } from "react";
import { getPost, likePost, commentPost } from "../services/api";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const { data } = await getPost(id);
    setPost(data);
  };

  const handleLike = async () => {
    await likePost(id);
    fetchPost();
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    await commentPost(id, { text: comment });
    setComment("");
    fetchPost();
  };

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <div className="flex gap-4 mb-6">
        <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Like ({post.likes.length})</button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleComment} className="flex gap-2 mb-6">
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a comment..." className="border p-2 flex-1 rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Post</button>
      </form>

      <div className="space-y-2">
        {post.comments.map((c, idx) => (
          <div key={idx} className="p-2 bg-gray-100 rounded">{c.text}</div>
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
