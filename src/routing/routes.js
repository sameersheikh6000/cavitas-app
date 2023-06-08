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
import InsuredClientView from "../pages/User/InsuredClientView";
import AdminPolicyInformation from "../pages/Admin/PolicyInformation"
import  ApprovalFile from "../pages/Admin/ApprovalFile";
import  AdminFileApproval from "../pages/Admin/PannelData";
import UploadClient from "../pages/User/UploadClient";
import BrokerLandingPage from "../pages/User/BrokerLandingPage";
import EmployLandingPage from "../pages/User/EmployLandingPage";
import MemberLandingPage from "../pages/User/MemberLandingPage";
import AboutUs from "../pages/User/AboutUs";
import FAQ from "../pages/User/FAQ";
import Claims from "../pages/User/Claims";
import UserProfileView from "../pages/User/UserProfileView";
import InsuredPersonSupportList from "../pages/User/SupportView/InsuredPersonSupportList";
import CavitasDocsView from "../pages/User/CavitasDocsView";
import InsuredClientGroup from "../pages/User/InsuredClientView/InsuredClientGroup";
import AdminInsuredClientView from "../pages/Admin/InsuredClientView";
import LandingPage from "../pages/User/LandingPage";
import Cart from "../pages/User/Cart";
import UserInformation from "../pages/Admin/UserInformation";
import AdminProfileView from "../pages/Admin/AdminProfileView/AdminProfileView";
import AdminUploadCavitasDocuments from "../pages/Admin/CavitasDocuments";
import ContactFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/ContactFormDetail";
import Tickets from "../pages/User/SupportView/TicketingSystemComponent/MySupportTickets/Tickets";
import SubmitNewTickets from "../pages/User/SupportView/TicketingSystemComponent/SubmitNewTickets/SubmitNewTickets";
import Contactus from "../pages/Admin/ApprovalFile/SupportComponent/Contactus";
import InsuredPerson from "../pages/Admin/ApprovalFile/SupportComponent/InsuredPerson";
import GetQuote from "../pages/Admin/ApprovalFile/SupportComponent/GetQuote";
import ContactSupportList from "../pages/User/SupportView/TicketingSystemComponent/ContactSupport/ContactSupportList";
import ContactSupportTicket from "../pages/User/SupportView/TicketingSystemComponent/ContactSupport/ContactSupportTicket";
import QuoteSupportList from "../pages/User/SupportView/TicketingSystemComponent/QuoteSupport/QuoteSupportList";
import QuoteSupportTicket from "../pages/User/SupportView/TicketingSystemComponent/QuoteSupport/QuoteSupportTicket";
import InsuredPersonSupportTicket from "../pages/User/SupportView/InsuredPersonSupportTicket";
import SupportFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/SupportFormDetail";
import QuoteFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/QuoteFormDetail";
import Blog2 from "../pages/User/MemberLandingPage/ValuableReading/Blog2";
import Blog3 from "../pages/User/MemberLandingPage/ValuableReading/Blog3";
import Blog1 from "../pages/User/MemberLandingPage/ValuableReading/Blog1";
import Blog from "../components/Footer/Blog";
import EnterMail from "../pages/User/Authentication/BrokerForgetPassword/EnterMail"
import AddCode from "../pages/User/Authentication/BrokerForgetPassword/AddCode"
import SetPassword from "../pages/User/Authentication/BrokerForgetPassword/SetPassword"
import UpdatePassword from "../pages/User/Authentication/BrokerForgetPassword/UpdatePassword"
import EmployerAddCode from "../pages/User/EmployAuthentication/EmployerForgetPassword/EmployerAddCode";
import EmployerSetPassword from "../pages/User/EmployAuthentication/EmployerForgetPassword/EmployerSetPassword";
import EmployerUpdatePassword from "../pages/User/EmployAuthentication/EmployerForgetPassword/EmployerUpdatePassword";
import EmployerEnterMail from "../pages/User/EmployAuthentication/EmployerForgetPassword/EmployerEnterMail";
import MemberEnterMail from "../pages/User/MemberAuthentication/MemberForgetPassword/MemberEnterMail"
import MemberSetPassword from "../pages/User/MemberAuthentication/MemberForgetPassword/MemberSetPassword";
import MemberUpdatePassword from "../pages/User/MemberAuthentication/MemberForgetPassword/MemberUpdatePassword";
import MemberAddCode from "../pages/User/MemberAuthentication/MemberForgetPassword/MemberAddCode";
import ResetPassword from "../pages/ResetPassword";
import { USER_STORAGE_KEY } from "../config/helpers/variables";
import InsuredPersonDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/InsuredPersonDetail";
import PrivacyPolicy from "../pages/User/Privacypolicy/index";
const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));


export const routes = [

  // user routes


   {
     path: "/:lang",
     component: user ? Dashboard : LandingPage,
     isPrivate: false,
   },

   {
     path: "/",
     component: user ? Dashboard : LandingPage,
     isPrivate: false,
   },

  {
    path: "/broker/:lang",
    component: BrokerLandingPage,
    isPrivate: false,
  },
  {
    path: "/broker",
    component: BrokerLandingPage,
    isPrivate: false,
  },

  {
    path: "/employ/:lang",
    component: EmployLandingPage,
    isPrivate: false,
  },
  {
    path: "/employ",
    component: EmployLandingPage,
    isPrivate: false,
  },

  {
    path: "/member/:lang",
    component: MemberLandingPage,
    isPrivate: false,
  },
  {
    path: "/member",
    component: MemberLandingPage,
    isPrivate: false,
  },

  {
    path: "/signin/:lang",
    component: SignIn,
    isPrivate: false,
  },
  {
    path: "/signin",
    component: SignIn,
    isPrivate: false,
  },

  {
    path: "/signup/:lang",
    component: SignUp,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: SignUp,
    isPrivate: false,
  },

  {
    path: "/member-signin/:lang",
    component: MemberSignIn,
    isPrivate: false,
  },
  {
    path: "/member-signin",
    component: MemberSignIn,
    isPrivate: false,
  },

  {
    path: "/member-signup/:lang",
    component: MemberSignUp,
    isPrivate: false,
  },
  {
    path: "/member-signup",
    component: MemberSignUp,
    isPrivate: false,
  },

  {
    path: "/employ-signin/:lang",
    component: EmploySignIn,
    isPrivate: false,
  },
  {
    path: "/employ-signin",
    component: EmploySignIn,
    isPrivate: false,
  },

  {
    path: "/employ-signup/:lang",
    component: EmploySignUp,
    isPrivate: false,
  },
  {
    path: "/employ-signup",
    component: EmploySignUp,
    isPrivate: false,
  },

  {
    path: "/dashboard/:lang",
    component: Dashboard,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: false,
  },

  {
    path: "/uploadclient/:lang",
    component: UploadClient,
    isPrivate: false,
  },
  {
    path: "/uploadclient",
    component: UploadClient,
    isPrivate: false,
  },

  {
    path: "/insuredclient/view/:lang",
    component: InsuredClientView,
    isPrivate: false,
  },
  {
    path: "/insuredclient/view",
    component: InsuredClientView,
    isPrivate: false,
  },

  {
    path: "/insuredclient/group/:lang",
    component: InsuredClientGroup,
    isPrivate: false,
  },
  {
    path: "/insuredclient/group",
    component: InsuredClientGroup,
    isPrivate: false,
  },

  {
    path: "/about/:lang",
    component: AboutUs,
    isPrivate: false,
  },
  {
    path: "/about",
    component: AboutUs,
    isPrivate: false,
  },

  {
    path: "/faq/:lang",
    component: FAQ,
    isPrivate: false,
  },
  {
    path: "/faq/:lang",
    component: FAQ,
    isPrivate: false,
  },

  {
    path: "/claims/:lang",
    component: Claims,
    isPrivate: false,
  },
  {
    path: "/claims",
    component: Claims,
    isPrivate: false,
  },

  {
    path: "/profile/user/view/:lang",
    component: UserProfileView,
    isPrivate: false,
  },
  {
    path: "/profile/user/view",
    component: UserProfileView,
    isPrivate: false,
  },

  {
    path: "/support/view/:lang",
    component: InsuredPersonSupportList,
    isPrivate: false,
  },
  {
    path: "/support/view",
    component: InsuredPersonSupportList,
    isPrivate: false,
  },

  {
    path: "/cavitasdocs/view/:lang",
    component: CavitasDocsView,
    isPrivate: false,
  },
  {
    path: "/cavitasdocs/view",
    component: CavitasDocsView,
    isPrivate: false,
  },

  {
    path: "/cart/:lang",
    component: Cart,
    isPrivate: false,
  },
  {
    path: "/cart",
    component: Cart,
    isPrivate: false,
  },
  // {
  //   path: "/valuablereading/view/:id",
  //   component: ValuableReadingView,
  //   isPrivate: false,
  // },


  // admin routes

  {
    path: "/admin/signin/:lang",
    component: AdminSignIn,
    isPrivate: false,
  },
  {
    path: "/admin/signup/:lang",
    component: AdminSignUp,
    isPrivate: false,
  },
  {
    path: "/admin/:lang",
    component: AdminDashboard,
    isPrivate: false,
  },
  {
    path: "/admin/InsuredClientView/:lang",
    component: AdminInsuredClientView,
    isPrivate: false,
  },
  {
    path: "/admin/PolicyInformation/:lang",
    component: AdminPolicyInformation,
    isPrivate: false,
  },
  {
    path: "/admin/PannelData/:lang",
    component:  AdminFileApproval,
    isPrivate: false,
  },
  {
    path: "/admin/support-tickets/:lang",
    component:   ApprovalFile,
    isPrivate: false,
  },
  {
    path: "/admin/UserInformation/:lang",
    component:   UserInformation,
    isPrivate: false,
  },
  {
    path: "/admin/CavitasDocuments/:lang",
    component:   AdminUploadCavitasDocuments,
    isPrivate: false,
  },
  {
    path: "/admin/profile/view/:lang",
    component:   AdminProfileView,
    isPrivate: false,
  },
  {
    path: "/admin/AdminPolicyInformation/:lang",
    component: AdminPolicyInformation,
    isPrivate: false,
  },

  // Forms

  {
    path: "/admin/contact-tickets/:id/ContactFormDetail/:lang",
    component: ContactFormDetail,
    isPrivate: false,
  },

  // {
  //   path: "/user/Support/TicketsList/:lang",
  //   component: SupportView,
  //   isPrivate: false,
  // }
  ,
  {

    path: "/SubmitNewTickets/:lang",
         component: SubmitNewTickets,
    isPrivate: false,
  },

  {
    path: "/Tickets/:id/:lang",
    component: Tickets,
    isPrivate: false,
  },

  {
    path: "/admin/Contactus/:lang",
    component: Contactus,
    isPrivate: false,
  },
  {
    path: "/InsuredPerson/:lang",
    component: InsuredPerson,
    isPrivate: false,
  },
  {
    path: "/InsuredPersonDetail/:lang",
    component: InsuredPersonDetail,
    isPrivate: false,
  },
  {
    path: "/GetQuote/:lang",
    component: GetQuote,
    isPrivate: false,
  },

  {
    path: "/ContactSupportList/:lang",
    component: ContactSupportList,
    isPrivate: false,
  },

  {
    path: "/ContactSupportTicket/:id/:lang",
    component: ContactSupportTicket,
    isPrivate: false,
  },

  {
    path: "/QuoteSupportList/:lang",
    component: QuoteSupportList,
    isPrivate: false,
  },
  {
    path: "/QuoteSupportTicket/:id/:lang",
    component: QuoteSupportTicket,
    isPrivate: false,
  },

  // {
  //   path: "/InsuredPersonSupportList/:lang",
  //   component:  InsuredPersonSupportList  ,
  //   isPrivate: false,
  // },
  {
    path: "/InsuredPersonSupportTicket/:id/:lang",
    component: InsuredPersonSupportTicket,
    isPrivate: false,
  },
  {
    path: "admin/support-tickets/:id/supportFormDetail/:lang",
    component: SupportFormDetail,
    isPrivate: false,
  },
  {
    path: "admin/quotes/:id/QuoteDetail/:lang",
    component: QuoteFormDetail,
    isPrivate: false
  },
  // blog
  {
    path: "/Blog1/:lang",
    component: Blog1,
    isPrivate: false
  },
  {
    path: "/Blog2/:lang",
    component: Blog2,
    isPrivate: false
  },
  {
    path: "/Blog3/:lang",
    component: Blog3,
    isPrivate: false
  },
  {
    path: "/Blog/:lang",
    component: Blog,
    isPrivate: false
  },
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
    path: "/admin",
    component: AdminDashboard,
    isPrivate: false,
  },
  {
    path: "/admin/InsuredClientView",
    component: AdminInsuredClientView,
    isPrivate: false,
  },
  {
    path: "/admin/PolicyInformation",
    component: AdminPolicyInformation,
    isPrivate: false,
  },
  {
    path: "/admin/PannelData",
    component:  AdminFileApproval,
    isPrivate: false,
  },
  {
    path: "/admin/support-tickets",
    component:   ApprovalFile,
    isPrivate: false,
  },
  {
    path: "/admin/UserInformation",
    component:   UserInformation,
    isPrivate: false,
  },
  {
    path: "/admin/CavitasDocuments",
    component:   AdminUploadCavitasDocuments,
    isPrivate: false,
  },
  {
    path: "/admin/profile/view",
    component:   AdminProfileView,
    isPrivate: false,
  },
  {
    path: "/admin/AdminPolicyInformation",
    component: AdminPolicyInformation,
    isPrivate: false,
  },

  {
    path: "/admin/InsuredPersonDetail/:id/:lang",
    component: InsuredPersonDetail,
    isPrivate: false
  },

  // Forms

  {
    path: "/admin/contact-tickets/:id/ContactFormDetail",
    component: ContactFormDetail,
    isPrivate: false,
  },

  // {
  //   path: "/user/Support/TicketsList",
  //   component: SupportView,
  //   isPrivate: false,
  // }
  ,
  {

    path: "/SubmitNewTickets",
         component: SubmitNewTickets,
    isPrivate: false,
  },

  {
    path: "/Tickets/:id",
    component: Tickets,
    isPrivate: false,
  },

  {
    path: "/admin/Contactus",
    component: Contactus,
    isPrivate: false,
  },
  {
    path: "/InsuredPerson",
    component: InsuredPerson,
    isPrivate: false,
  },
  {
    path: "/GetQuote",
    component: GetQuote,
    isPrivate: false,
  },

  {
    path: "/ContactSupportList",
    component: ContactSupportList,
    isPrivate: false,
  },

  {
    path: "/ContactSupportTicket/:id",
    component: ContactSupportTicket,
    isPrivate: false,
  },

  {
    path: "/QuoteSupportList",
    component: QuoteSupportList,
    isPrivate: false,
  },
  {
    path: "/QuoteSupportTicket/:id",
    component: QuoteSupportTicket,
    isPrivate: false,
  },

  {
    path: "/InsuredPersonSupportList",
    component:  InsuredPersonSupportList  ,
    isPrivate: false,
  },
  {
    path: "/InsuredPersonSupportTicket",
    component: InsuredPersonSupportTicket,
    isPrivate: false,
  },
  {
    path: "admin/support-tickets/:id/supportFormDetail",
    component: SupportFormDetail,
    isPrivate: false,
  },
  {
    path: "admin/quotes/:id/QuoteDetail",
    component: QuoteFormDetail,
    isPrivate: false
  },
  // blog
  {
    path: "/Blog1",
    component: Blog1,
    isPrivate: false
  },
  {
    path: "/Blog2",
    component: Blog2,
    isPrivate: false
  },
  {
    path: "/Blog3",
    component: Blog3,
    isPrivate: false
  },
  {
    path: "/Blog",
    component: Blog,
    isPrivate: false
  },

  // ForgetPassword

  {
    path: "/Add-Mail",
    component: EnterMail,
    isPrivate: false
  },

  {
    path: "/AddCode",
    component: AddCode,
    isPrivate: false
  },
  {
    path: "/SetPassword",
    component: SetPassword,
    isPrivate: false
  },
  {
    path: "/UpdatePassword",
    component: UpdatePassword,
    isPrivate: false
  },

  {
    path: "/EmployerUpdatePassword",
    component: EmployerUpdatePassword,
    isPrivate: false
  },

  {
    path: "/EmployerSetPassword",
    component: EmployerSetPassword,
    isPrivate: false
  },

  {
    path: "/EmployerAddCode",
    component: EmployerAddCode,
    isPrivate: false
  },

  {
    path: "/EmployerEnterMail",
    component: EmployerEnterMail,
    isPrivate: false
  },

  {
    path: "/MemberEnterMail",
    component: MemberEnterMail,
    isPrivate: false
  },
  {
    path: "/MemberAddCode",
    component: MemberAddCode,
    isPrivate: false
  },
   {
    path: "/MemberSetPassword",
    component: MemberSetPassword,
    isPrivate: false
  },
  {
    path: "/MemberUpdatePassword",
    component: MemberUpdatePassword,
    isPrivate: false
  },
  {
    path: "/Add-Mail/:lang",
    component: EnterMail,
    isPrivate: false
  },

  {
    path: "/AddCode/:lang",
    component: AddCode,
    isPrivate: false
  },
  {
    path: "/SetPassword/:lang",
    component: SetPassword,
    isPrivate: false
  },
  {
    path: "/UpdatePassword/:lang",
    component: UpdatePassword,
    isPrivate: false
  },

  {
    path: "/EmployerUpdatePassword/:lang",
    component: EmployerUpdatePassword,
    isPrivate: false
  },

  {
    path: "/EmployerSetPassword/:lang",
    component: EmployerSetPassword,
    isPrivate: false
  },

  {
    path: "/EmployerAddCode/:lang",
    component: EmployerAddCode,
    isPrivate: false
  },

  {
    path: "/EmployerEnterMail/:lang",
    component: EmployerEnterMail,
    isPrivate: false
  },

  {
    path: "/MemberEnterMail/:lang",
    component: MemberEnterMail,
    isPrivate: false
  },
  {
    path: "/MemberAddCode/:lang",
    component: MemberAddCode,
    isPrivate: false
  },
   {
    path: "/MemberSetPassword/:lang",
    component: MemberSetPassword,
    isPrivate: false
  },
  {
    path: "/MemberUpdatePassword/:lang",
    component: MemberUpdatePassword,
    isPrivate: false
  },
  {
    path: "/Privacypolicy/:lang",
    component: PrivacyPolicy,
    isPrivate: false
  },
  {
    path: "/reset_password",
    component: ResetPassword,
    isPrivate: false
  },
]


