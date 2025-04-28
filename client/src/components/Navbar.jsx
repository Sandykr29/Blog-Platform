import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "../assets/icon.png"; // Import the logo

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Updated to use logout
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4 shadow-lg relative overflow-hidden">
      <div className="flex justify-between items-center mx-8">
        {/* Logo section */}
        <Link to="/" className="text-2xl font-semibold flex items-center space-x-2">
          <img src={Logo} alt="BLOGO" className="w-12 h-12 object-contain" /> {/* Adjusted size to ensure full visibility */}
          <span className="text-3xl font-extrabold tracking-wide text-white">BLOGO</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          {/* Home link */}
          <Link 
            to={user && Object.keys(user).length > 0 ? "/home" : "/"} 
            className="text-white hover:text-yellow-400 hover:scale-105 transform transition-all duration-300"
          >
            Home
          </Link>
          {user && Object.keys(user).length > 0 ? (
            <>
              {/* Profile link */}
              <Link 
                to="/profile" 
                className="text-white hover:text-yellow-400 hover:scale-105 transform transition-all duration-300"
              >
                Profile
              </Link>

              {/* Create Blog link */}
              <Link 
                to="/create" 
                className="text-white hover:text-yellow-400 hover:scale-105 transform transition-all duration-300"
              >
                Create Blog
              </Link>

              {/* Logout button */}
              <button
                onClick={logout}
                className="text-white hover:text-yellow-400 hover:scale-105 transform transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-white hover:text-yellow-400 hover:scale-105 transform transition-all duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Lighter background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30"></div>
    </nav>
  );
};

export default Navbar;
