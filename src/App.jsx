import React from 'react';

import LoginButton from './components/Landingpage/login/Loginbutton';
import LogoutButton from './components/Landingpage/login/Logoutbutton';
// import { Route,Routes } from 'react-router-dom';
import Profile from './components/Landingpage/login/profile';
export default function App() {
  return (
    
   <>
   <h1>Auth0 Login</h1>
   <LoginButton/>
   <LogoutButton/>
   <Profile/>


   </>
  )
}