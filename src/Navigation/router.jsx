import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/LandingPage/Home";
import SignUp from "../pages/Auth/SignUp";
import AppRoot from "../pages/AppLayout/AppRoot";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import AuthRoot from "../pages/Auth/AuthRoot";
import Mission from "../pages/LandingPage/Mission";
import Services from "../pages/LandingPage/Services";
import AboutUs from "../pages/LandingPage/AboutUs";
import ContactUs from "../pages/LandingPage/ContactUs";
import Gallery from "../pages/LandingPage/Gallery";
import PrivacyPolicy from "../pages/LandingPage/PrivacyPolicy";
import TermsOfService from "../pages/LandingPage/TermsOfService";
import SubscriptionPlan from "../pages/Payment/SubscriptionPlan";
import Root from "../pages/App/Root";
import ChatHome from "../pages/App/ChatHome";



const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      children : [
        {
          index : true,
          element: <Home />,
      },
      {
        path: "mission",
        element: <Mission />,
       
      },
      {
        path: "services",
        element: <Services />,
       
      },
      {
        path: "about",
        element: <AboutUs />,
       
      },
      {
        path: "contact",
        element: <ContactUs />,
       
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-of-service",
        element: <TermsOfService />,
      },




      ]
      
         },

         {
          path : '/auth',
          element: <AuthRoot />,
          children : [
            {
              path: "sign-in",
              element: <Login />,
             
            },
            {
              path: "sign-up",
              element: <SignUp />,
             
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
             
            },
            {
              path: "subscription",
              element: <SubscriptionPlan />,
             
            },
    
          ]

         }, 
         {
          path : '/chat',
          element : <Root />,
          children : [
            {index : true, element : <ChatHome />}
          ]
         }

         


  ]);

export default router