import React from "react";
import { Navigate } from "react-router-dom";
import useAuthenticate from "../../hooks/useAuthenticate";

const AdminPrivateRoute = ({ children }) => {
  const { adminAuthenticate } = useAuthenticate();
  const adminAuth = adminAuthenticate()
  if (adminAuth && adminAuth.token) {
    return children;
  }
  return <Navigate to='/admin/signin' />;
};

export default AdminPrivateRoute;
