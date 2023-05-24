
import React from "react";
import { Route,Routes } from 'react-router-dom';
import LandingPage from "./components/Landingpage/LandingPage";
import LoginButton from "./components/Landingpage/login/Loginbutton";
import LogoutButton from "./components/Landingpage/login/Logoutbutton";
import FormPersonalData from "./components/Profile/FormPersonalData";
import Profile from "./components/Landingpage/login/profile";
import Home from "./components/Home/Home"
import Job from "./components/Job/Job"
import Profilepage from "./components/Profile/Profilepage";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      
       
      <Route path="/FormPersonalData" element={<FormPersonalData />}/>
      <Route path="/LoginButton" element={<LoginButton/>}/>
      <Route path="/LogoutButton" element={<LogoutButton/>}/>
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Job" element={<Job/>}/>
      <Route path="/Profilepage" element={<Profilepage/>} />
     
      </Routes>
   
    </>
  );
}
