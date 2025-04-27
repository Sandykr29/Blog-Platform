import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Updated to use logout
  const navigate = useNavigate();
  console.log("hello this is user in navbar ",user)
  console.log("Navbar rendering. User state:", user); // Debugging

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">Open-UP</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          {user && Object.keys(user).length > 0 ? (
            <>
              <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
              <Link to="/create" className="hover:text-yellow-400">Create Blog</Link>
              <button onClick={logout} className="hover:text-yellow-400">Logout</button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hover:text-yellow-400"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
