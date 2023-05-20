import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Loginbutton";
import LogoutButton from "./Logoutbutton";
import { useState,useEffect } from "react";
import axios from "axios";

{


}


const Test =(props)=>{
    
  const saveData =async()=>{
    const obj={
        
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            dateOfBirth: "1998-05-15",
            country: "USA",
            city: "New York",
            phoneNumber: "+1 123-456-7890",
            address: "123 Main St",
            gender: "Male",
            profilePicture: "http://example.com/profile.jpg",
            imgForCover: "http://example.com/cover.jpg"
          
    }

    const serverUrl=`https://onlineserver-op9n.onrender.com/users`
    const result=  await axios.post(serverUrl,obj)
   console.log(result)
    }



    saveData();

return (

    
    
    
    <>
    
    <p>{props.data1}</p>
    <p>{props.data2}</p>
    <p>{props.data3}</p>
    
    
    
    </>
    )}
    
    export default Test