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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-amber-200 px-4">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1659725179821-948eb3d6d6b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Vintage Writing"
          className="h-[450px] w-full object-cover rounded-l-md shadow-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex flex-col items-start bg-[#fdf6e3]  border-amber-800 rounded-r-md p-10 shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-amber-900 italic">Craft Your Story</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
          style={{ 
            backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
            backgroundRepeat: "repeat",
            cursor: "url('https://cdn.custom-cursor.com/packs/3199/pack3199.png'), auto"
          }}
        >
          <input
            type="text"
            name="caption"
            placeholder="Post Caption"
            value={formData.caption}
            onChange={handleChange}
            required
            className="p-3 rounded border-2 border-amber-800 italic text-amber-800 placeholder-italic focus:outline-none focus:ring-2 focus:ring-amber-700 bg-[#fdf1d6]"
          />
          <textarea
            name="post"
            placeholder="Write your post here..."
            value={formData.post}
            onChange={handleChange}
            required
            rows="8"
            className="p-4 rounded border-2 border-amber-800 italic text-amber-800 placeholder-italic resize-none focus:outline-none focus:ring-2 focus:ring-amber-700 bg-[#fdf1d6]"
          />
          <button
            type="submit"
            className="bg-amber-700 text-white p-3 rounded hover:bg-amber-800 transition-colors font-semibold tracking-wide"
          >
            Publish Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
