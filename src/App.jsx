import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FormPersonalData from "./components/Profile/FormPersonalData";
import LandingPage from "./components/Landingpage/LandingPage";
import LoginButton from "./components/Landingpage/login/Loginbutton";
import LogoutButton from "./components/Landingpage/login/Logoutbutton";

import Profile from "./components/Landingpage/login/profile";
import Home from "./components/Home/Home";
import Job from "./components/Job/Job";
import Comment from "./components/Home/Comment";
import Form from "./components/PortfolioMaker/Form";

import Profilepage from "./components/Profile/Profilepage";
import { useAuth0 } from "@auth0/auth0-react";
import PostTest from "./test test/PostTest";
import Facebook from "./test test/Facebook";
import AboutUs from "./components/AboutUs/AboutUs";
import ProfileTemp from "./components/Profile/ProfileTemp";
import Landing from "./components/temp/landing";

export default function App() {
  /*----------------------------saving authintication status in local storage -------------------*/
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", "true");
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isAuthenticated]);

  if (loading == false) {
    /*----------*/
    return (
      <>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/LoginButton" element={<LoginButton />} />
            <Route path="/LogoutButton" element={<LogoutButton />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/FormPersonalData" element={<FormPersonalData />} />
            <Route path="/LoginButton" element={<LoginButton />} />
            <Route path="/LogoutButton" element={<LogoutButton />} />
            <Route path="/Profile" element={<Profile />} />

            <Route path="/comment" element={<Comment />} />
            <Route path="/home" element={<Home />} />

            <Route path="/Form" element={<Form />} />
            <Route path="/posttest" element={<PostTest />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/" element={<Landing />} />
            <Route path="/job" element={<Job />} />
            <Route path="/Profilepage" element={<Profilepage />} />
            <Route path="/portfolio" element={<Form />} />
            <Route path="/posttest" element={<PostTest />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/temp" element={<ProfileTemp />} />
          </Routes>
        )}
      </>
    );
  }
}
Landing;
