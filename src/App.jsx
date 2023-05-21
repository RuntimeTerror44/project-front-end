import React from "react";
// import LandingPage from "./components/Landingpage/LandingPage";
// import LoginButton from "./components/Landingpage/login/Loginbutton";
// import LogoutButton from "./components/Landingpage/login/Logoutbutton";
// import { Route,Routes } from 'react-router-dom';
import FormPersonalData from "./components/Profile/FormPersonalData";
// import Profile from "./components/Landingpage/login/profile";
export default function App() {
  return (
    <>
      {/* <LandingPage/> */}
      <FormPersonalData /> {/* form to get the user data */}
      {/* <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile /> */}
    </>
  );
}
