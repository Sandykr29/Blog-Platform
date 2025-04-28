import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    bio: "A passionate blogger and tech enthusiast. Sharing knowledge and experiences one post at a time.",
    posts: [
      {
        id: 1,
        title: "Exploring the Future of AI",
        content: "Artificial Intelligence is transforming the world...",
        tags: ["AI", "Technology", "Future"],
      },
      {
        id: 2,
        title: "Top 10 JavaScript Frameworks",
        content: "JavaScript frameworks have revolutionized web development...",
        tags: ["JavaScript", "Web Development", "Frameworks"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
      {/* Profile Header */}
      <motion.div
        className="bg-white text-black p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg text-gray-700">{user.email}</p>
        <p className="text-lg text-gray-700">{user.location}</p>
        <p className="mt-4 text-gray-600">{user.bio}</p>
      </motion.div>

      {/* Posts Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Your Posts</h2>
        {user.posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-700">{post.content}</p>
            <div className="mt-4">
              <span className="font-bold text-gray-600">Tags: </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-12 text-center text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>&copy; 2023 Blog Platform. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Profile;
