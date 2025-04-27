import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {}); // Initialize user from localStorage
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AuthProvider initialized. Token:", token, "User:", user); // Debugging
    if (token) {
      fetchUser();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched user:", res.data.user); // Debugging
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        console.error("User data is missing in API response."); // Debugging
      }
    } catch (err) {
      console.error("Error fetching user:", err); // Debugging
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("auth/login", { email, password });
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user in localStorage
      navigate("/home");
    } catch (err) {
      alert(err.response.data.msg || "Login failed");
    }
  };

  const register = async (name, email, password) => {
    try {
      await axios.post("/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      alert(err.response.data.msg || "Registration failed");
    }
  };

  const logout = () => {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove user from localStorage
    console.log("User logged out. Token and user cleared."); // Debugging
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
