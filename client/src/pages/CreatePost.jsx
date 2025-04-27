import { useState } from "react";
import { createPost } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", content: "", tags: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim());
      await createPost({ ...formData, tags: tagsArray });
      alert('Post Created Successfully!');
      navigate('/');
    } catch (err) {
      alert('Post Creation Failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
        <textarea name="content" placeholder="Content" onChange={handleChange} required className="w-full mb-4 p-2 border rounded h-40"></textarea>
        <input type="text" name="tags" placeholder="Tags (comma separated)" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
