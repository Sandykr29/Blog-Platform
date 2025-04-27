import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/api";
import { Link } from "react-router-dom";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    const userPosts = data.filter(post => post.creator === user?.id);
    setPosts(userPosts);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
      fetchPosts();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Posts</h1>
      {posts.length === 0 ? <p>No posts yet.</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(post => (
            <div key={post._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex gap-4">
                <Link to={`/posts/${post._id}`} className="text-blue-600">View</Link>
                <button onClick={() => handleDelete(post._id)} className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
