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
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginButton" element={<LoginButton />} />
            <Route path="/LogoutButton" element={<LogoutButton />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/FormPersonalData" element={<FormPersonalData />} />
            <Route path="/LoginButton" element={<LoginButton />} />
            <Route path="/LogoutButton" element={<LogoutButton />} />
            <Route path="/Profile" element={<Profile />} />

            <Route path="/comment" element={<Comment />} />
            <Route path="/home" element={<Home />} />
            <Route path="/job" element={<Job />} />
           

            <Route path="/Profilepage" element={<Profilepage />} />
            <Route path="/Form" element={<Form />} />
            
          </Routes>
        )}
      </>
    );
  }
}
