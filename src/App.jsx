import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import Signup from './components/LandingPage/Login/Signup';
export default function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>


  </Routes>
  
   
  </BrowserRouter>
   
   
   </>
  )
}