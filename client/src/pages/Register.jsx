import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.name, formData.email, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-md text-black shadow-md w-80">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="p-2 rounded border"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-2 rounded border"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-2 rounded border"/>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Register</button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <span
          className="text-blue-300 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Click here to login
        </span>
      </p>
    </div>
  );
};

export default Register;
