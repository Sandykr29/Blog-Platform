import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import PostCard from "../components/PostCard";

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios.get(`/post/getUserPosts/${user._id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUserPosts(response.data);
    })
    .catch(err => {
      console.error("Error fetching user posts", err);
    });
  }, [user._id, token]);

  return (
    <div className="p-8 bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-2xl font-semibold">{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <h3 className="mt-6 text-2xl font-semibold">Your Posts</h3>
      <div className="space-y-6">
        {userPosts.length ? userPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        )) : <p>You have no posts yet.</p>}
      </div>
    </div>
  );
};

export default Profile;
