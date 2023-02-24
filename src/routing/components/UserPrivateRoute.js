import React from "react";
import { Navigate } from "react-router-dom";
import useAuthenticate from "../../hooks/useAuthenticate";
import { routes } from "../routes";

const UserPrivateRoute = ({ children }) => {
  const { userAuthenticate } = useAuthenticate();
  const userAuth = userAuthenticate()
  const pathname = window.location.pathname
  const currentRoute = routes.find((route) => pathname.includes(route.name))

  if (userAuth && userAuth.token) {
    if (currentRoute?.userRole?.includes(userAuth?.data?.role)) {
      return children;
    } else {
      return <Navigate to='/dashboard' />;
    }
  }
  return <Navigate to='/signin' />;
};

export default UserPrivateRoute;
