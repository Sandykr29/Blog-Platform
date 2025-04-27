import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 text-white">
      <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-md text-black shadow-md w-80">
        <input type="text" name="email" placeholder="Email" onChange={handleChange} required className="p-2 rounded border"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-2 rounded border"/>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
      </form>
      <p className="mt-4 text-sm">
        New user?{" "}
        <span
          className="text-blue-300 cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
