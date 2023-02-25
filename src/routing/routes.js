import AdminSignIn from "../pages/Admin/Authentication/AdminSignIn";
import AdminSignUp from "../pages/Admin/Authentication/AdminSignUp";
import SignIn from "../pages/User/Authentication/SignIn";
import SignUp from "../pages/User/Authentication/SignUp";
import AdminDashboard from "../pages/Admin/Dashboard";
import Dashboard from "../pages/User/Dashboard";
import AdminInsuredClientView from "../pages/Admin/InsuredClientView";
import InsuredClientView from "../pages/User/InsuredClientView";
import AdminUploadForm from "../pages/Admin/UploadForm";
import UploadForm from "../pages/User/UploadForm";

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
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: false,
  },
  {
    path: "/uploadform",
    component: UploadForm,
    isPrivate: false,
  },
  {
    path: "/insuredclient/view",
    component: InsuredClientView,
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
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
    isPrivate: false,
  },
  {
    path: "/admin/uploadform",
    component: AdminUploadForm,
    isPrivate: false,
  },
  {
    path: "/admin/insuredclient/view",
    component: AdminInsuredClientView,
    isPrivate: false,
  },
]