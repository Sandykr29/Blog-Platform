import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Open-UP</h1>
      <p className="text-xl mb-8">
        A platform to connect, share, and create amazing blogs. Join us now to start your journey!
      </p>

      <div className="flex gap-5">
        <button
          onClick={handleLogin}
          className="bg-yellow-500 text-black p-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
        >
          Login 
        </button>
        <button
          onClick={handleRegister}
          className="bg-yellow-500 text-black p-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
        >
          Sign Up
        </button>
      </div>
      
    </div>
  );
};

export default LandingPage;
