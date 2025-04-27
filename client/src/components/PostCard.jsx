import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}...</p>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <Link to={`/posts/${post._id}`} className="text-blue-500 mt-4 inline-block">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
