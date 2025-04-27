import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    caption: "",
    post: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/post", formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      navigate("/home");
    })
    .catch(err => {
      console.error("Error creating post", err);
    });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-orange-400 to-yellow-500 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8 rounded-md text-black shadow-md w-80">
        <input
          type="text"
          name="caption"
          placeholder="Post Caption"
          value={formData.caption}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
        <textarea
          name="post"
          placeholder="Write your post here..."
          value={formData.post}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
