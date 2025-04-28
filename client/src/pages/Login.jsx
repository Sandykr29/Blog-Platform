import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 flex items-center justify-center text-white px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100">
          <img
            src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8fDA%3D"
            alt="Typewriter"
            className="h-[400px] w-auto object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Welcome Back!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-black">
            New user?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
