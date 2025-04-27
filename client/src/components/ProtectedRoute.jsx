import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('profile'));  // Get user data (token)

  if (!user) {
    // If no user is found, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user exists, render the child route
  return <Outlet />;
};

export default ProtectedRoute;
