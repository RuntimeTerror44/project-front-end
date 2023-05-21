import React from 'react';
import FormPersonalData from "./components/Profile/FormPersonalData";
import LoginButton from './components/Landingpage/login/Loginbutton';
import LogoutButton from './components/Landingpage/login/Logoutbutton';
// import { Route,Routes } from 'react-router-dom';
import PortfolioForm from './components/PortfolioMaker/PortfolioForm'
import Profile from './components/Landingpage/login/profile';
export default function App() {
  return (
    
   <>
   <h1>hello</h1>
  
   <PortfolioForm/>
   
   

   <FormPersonalData />  {/* form to get the user data */}


   <h1>Auth0 Login</h1>
   <LoginButton/>
   <LogoutButton/>
   <Profile/>


   </>
  )
}
