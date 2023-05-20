import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FormPersonalData from './components/Profile/FormPersonalData';
import Login from './components/LandingPage/Login/Login';
import Signup from './components/LandingPage/Login/Signup';
export default function App() {
  return (
   <>
  <FormPersonalData/>

  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>


  </Routes>
  
   
   
   
   </>
  )
}