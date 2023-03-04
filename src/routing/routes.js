import AdminSignIn from "../pages/Admin/Authentication/AdminSignIn";
import AdminSignUp from "../pages/Admin/Authentication/AdminSignUp";
import SignIn from "../pages/User/Authentication/SignIn";
import SignUp from "../pages/User/Authentication/SignUp";
import MemberSignIn from "../pages/User/MemberAuthentication/SignIn";
import MemberSignUp from "../pages/User/MemberAuthentication/SignUp";
import EmploySignIn from "../pages/User/EmployAuthentication/SignIn";
import EmploySignUp from "../pages/User/EmployAuthentication/SignUp";
import AdminDashboard from "../pages/Admin/Dashboard";
import Dashboard from "../pages/User/Dashboard";
import AdminInsuredClientView from "../pages/Admin/InsuredClientView";
import InsuredClientView from "../pages/User/InsuredClientView";
import AdminUploadForm from "../pages/Admin/UploadForm";
import UploadForm from "../pages/User/UploadForm";
import BrokerLandingPage from "../pages/User/BrokerLandingPage";
import EmployLandingPage from "../pages/User/EmployLandingPage";
import MemberLandingPage from "../pages/User/MemberLandingPage";
import AboutUs from "../pages/User/AboutUs";
import FAQ from "../pages/User/FAQ";
import Claims from "../pages/User/Claims";

export const routes = [

  // user routes

  {
    path: "/",
    component: BrokerLandingPage,
    isPrivate: false,
  },
  {
    path: "/employ",
    component: EmployLandingPage,
    isPrivate: false,
  },
  {
    path: "/member",
    component: MemberLandingPage,
    isPrivate: false,
  },
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
    path: "/member-signin",
    component: MemberSignIn,
    isPrivate: false,
  },
  {
    path: "/member-signup",
    component: MemberSignUp,
    isPrivate: false,
  },
  {
    path: "/employ-signin",
    component: EmploySignIn,
    isPrivate: false,
  },
  {
    path: "/employ-signup",
    component: EmploySignUp,
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
  {
    path: "/about",
    component: AboutUs,
    isPrivate: false,
  },
  {
    path: "/faq",
    component: FAQ,
    isPrivate: false,
  },
  {
    path: "/claims",
    component: Claims,
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