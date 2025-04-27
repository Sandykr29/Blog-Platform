import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Panini8 Blog</Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/create">Create</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
