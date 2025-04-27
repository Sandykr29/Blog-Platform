import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import PostCard from "../components/PostCard";

const Home = () => {
  // const { token } = useContext(AuthContext);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/posts", { // Replace with your API's base URL
  //     headers: { Authorization: `Bearer ${token}` }
  //   })
  //   .then(response => {
  //     console.log("Full response:", response); // Log the full response for debugging
  //     setPosts(response.data);
  //   })
  //   .catch(err => {
  //     console.error("Error fetching posts", err);
  //   });
  // }, [token]);

  // return (
  //   <div className="p-8 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen text-white">
  //     <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
  //     <div className="space-y-6">
  //       {posts.length ? posts.map((post) => (
  //         <PostCard key={post._id} post={post} />
  //       )) : <p>No posts available</p>}
  //     </div>
  //   </div>
  // );
  return (
    <h1>Home page</h1>
  )
};

export default Home;
