import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import LoginButton from "./components/Landingpage/login/Loginbutton";
import LogoutButton from "./components/Landingpage/login/Logoutbutton";
import FormPersonalData from "./components/Profile/FormPersonalData";
import Profile from "./components/Landingpage/login/profile";
import Home from "./components/Home/Home";
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
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/FormPersonalData" element={<FormPersonalData />} />
            <Route path="/LoginButton" element={<LoginButton />} />
            <Route path="/LogoutButton" element={<LogoutButton />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Profilepage" element={<Profilepage />} />
          </Routes>
        )}
      </>
    );
  }
}
