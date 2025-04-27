import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts") // Ensure this matches your API endpoint
      .then((response) => {
        console.log("Fetched posts:", response.data); // Debugging
        setPosts(response.data); // Assuming response.data is an array of posts
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
      <div className="space-y-6">
        {posts?.length > 0 ? (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
