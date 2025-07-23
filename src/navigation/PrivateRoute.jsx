import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = true // Example authentication check

  return isAuthenticated ? <Outlet /> : <Outlet />;
};

export default PrivateRoute;
