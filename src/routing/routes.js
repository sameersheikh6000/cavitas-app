import AdminSignIn from "../pages/Admin/Authentication/AdminSignIn";
import AdminSignUp from "../pages/Admin/Authentication/AdminSignUp";
import SignIn from "../pages/User/Authentication/SignIn";
import SignUp from "../pages/User/Authentication/SignUp";

export const routes = [


  // user routes

  {
    path: "/signin",
    component: SignIn,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: SignUp,
    isPrivate: false,
  },


  // admin routes

  {
    path: "/admin/signin",
    component: AdminSignIn,
    isPrivate: false,
  },
  {
    path: "/admin/signup",
    component: AdminSignUp,
    isPrivate: false,
  },

]