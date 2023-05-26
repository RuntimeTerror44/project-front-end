import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

import Test from "./Test";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
 

  useEffect(() => {
    if (isAuthenticated) {
      const storeUserData = async () => {
        // Check if the email already exists in your database
        const checkEmailExists = await axios.get(`http://localhost:5000/users`);
        let emailExist=false;

        for (let i = 0; i < checkEmailExists.data.length; i++) {
          if (user.email == checkEmailExists.data[i].email) {

             emailExist=true
            console.log(checkEmailExists.data[i].id);
            const storageData = checkEmailExists.data[i];
            localStorage.setItem("userId", JSON.stringify(storageData));
          }
         
        }
       if(!emailExist){
          const response = await axios.post("http://localhost:5000/users", {
            email: user.email,
            profilepicture: user.picture
            // Add other relevant user data fields
          });}
          
       
      };

      // console.log("User data stored successfully:", response.data);

      storeUserData();
    }
  }, [isAuthenticated, user]);

  return (
    isAuthenticated && (
      <Test data1={user.name} data2={user.picture} data3={user.email} />
    )
  );
};

export default Profile;

// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./Loginbutton";
// import LogoutButton from "./Logoutbutton";
// import { useState } from "react";
// import axios from "axios";
// import Test from "./Test";

// const Profile =(savedData)=>{

// const {user,isAuthenticated}= useAuth0();

// return (
// isAuthenticated &&(

// <>

// {/* <p>{user.nickname}</p>
// <img src={user.picture}></img>
// <p>{user.email}</p>
// <p>{user.family_name}</p> */}
// <Test data1={user.given_name} data2={user.picture} data3={user.email}/>

// </>
// ))}

// export default Profile
