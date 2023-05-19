import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
// import { Route,Routes } from 'react-router-dom';
import Profile from './components/Profile';
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