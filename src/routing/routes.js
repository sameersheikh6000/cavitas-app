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
import AdminUploadClient from "../pages/Admin/UploadClient";
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
import SupportView from "../pages/User/SupportView";
import CavitasDocsView from "../pages/User/CavitasDocsView";
import InsuredClientGroup from "../pages/User/InsuredClientView/InsuredClientGroup";
import AdminInsuredClientView from "../pages/Admin/InsuredClientView";
import LandingPage from "../pages/User/LandingPage";
import Cart from "../pages/User/Cart";
import ValuableReadingView from "../pages/User/MemberLandingPage/ValuableReading";
import UserInformation from "../pages/Admin/UserInformation";
import AdminProfileView from "../pages/Admin/AdminProfileView/AdminProfileView";
import AdminUploadCavitasDocuments from "../pages/Admin/CavitasDocuments";
import ContactFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/ContactFormDetail";
import TickekList from "../pages/User/SupportView/TicketingSystemComponent/MySupportTickets/TicketsList";
import Tickets from "../pages/User/SupportView/TicketingSystemComponent/MySupportTickets/Tickets";
import SubmitNewTickets from "../pages/User/SupportView/TicketingSystemComponent/SubmitNewTickets/SubmitNewTickets";
import Contactus from "../pages/Admin/ApprovalFile/SupportComponent/Contactus";
import InsuredPerson from "../pages/Admin/ApprovalFile/SupportComponent/InsuredPerson";
import GetQuote from "../pages/Admin/ApprovalFile/SupportComponent/GetQuote";
import ContactSupportList from "../pages/User/SupportView/TicketingSystemComponent/ContactSupport/ContactSupportList";
import ContactSupportTicket from "../pages/User/SupportView/TicketingSystemComponent/ContactSupport/ContactSupportTicket";
import QuoteSupportList from "../pages/User/SupportView/TicketingSystemComponent/QuoteSupport/QuoteSupportList";
import InsuredPersonSupportList from "../pages/User/SupportView/TicketingSystemComponent/InsuredSupport/InsuredPersonSupportList";
import QuoteSupportTicket from "../pages/User/SupportView/TicketingSystemComponent/QuoteSupport/QuoteSupportTicket";
import InsuredPersonSupportTicket from "../pages/User/SupportView/TicketingSystemComponent/InsuredSupport/InsuredPersonSupportTicket";
// import contactCavitas from "../pages/Form/ContactCavitas/index"
import SupportFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/SupportFormDetail";
import QuoteFormDetail from "../pages/Admin/ApprovalFile/SupportComponent/TicketComponent/QuoteFormDetail";


export const routes = [

  // user routes

  {
    path: "/",
    component: LandingPage,
    isPrivate: false,
  },
  {
    path: "/broker",
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
    path: "/uploadclient",
    component: UploadClient,
    isPrivate: false,
  },
  {
    path: "/insuredclient/view",
    component: InsuredClientView,
    isPrivate: false,
  },
  {
    path: "/insuredclient/group",
    component: InsuredClientGroup,
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
  {
    path: "/profile/user/view",
    component: UserProfileView,
    isPrivate: false,
  },
  {
    path: "/support/view",
    component: SupportView,
    isPrivate: false,
  },
  {
    path: "/cavitasdocs/view",
    component: CavitasDocsView,
    isPrivate: false,
  },
  {
    path: "/cart",
    component: Cart,
    isPrivate: false,
  },
  {
    path: "/valuablereading/view/:id",
    component: ValuableReadingView,
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

  // Forms

  {
    path: "/admin/contact-tickets/:id/ContactFormDetail",
    component: ContactFormDetail,
    isPrivate: false,
  },

  {

    path: "/user/Support/TicketsList",
         component: SupportView,
    isPrivate: false,
  }
  ,
  {

    path: "/SubmitNewTickets",
         component: SubmitNewTickets,
    isPrivate: false,
  },
  
  {
    path: "/Tickets",
    component: Tickets,
    isPrivate: false,
  },

  {
    path: "/Contactus",
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
    path: "/ContactSupportTicket",
    component: ContactSupportTicket,
    isPrivate: false,
  },

  {
    path: "/QuoteSupportList",
    component: QuoteSupportList,
    isPrivate: false,
  },
  {
    path: "/QuoteSupportTicket",
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
    inPrivate: false
  }
]

