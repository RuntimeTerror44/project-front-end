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
        const checkEmailExists = await axios.get(`${process.env.REACT_APP_SERVER_URL}users`);
        let emailExist=false;
        for (let i = 0; i < checkEmailExists.data.length; i++) {
          if (user.email == checkEmailExists.data[i].email) {

             emailExist=true
            console.log(checkEmailExists.data[i].id);
            const storageData = [checkEmailExists.data[i]];
            console.log(checkEmailExists.data[i])
            localStorage.setItem("userId", JSON.stringify(storageData));
          }

        }
       if(!emailExist){
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}users`, {
            email: user.email,
            profilepicture: user.picture

            // Add other relevant user data fields
          }



          )



          const checkEmailExists = await axios.get(`${process.env.REACT_APP_SERVER_URL}users`);

        for (let i = 0; i < checkEmailExists.data.length; i++) {
          if (user.email == checkEmailExists.data[i].email) {

             emailExist=true
            console.log(checkEmailExists.data[i].id);
            const storageData = [checkEmailExists.data[i]];






            localStorage.setItem("userId", JSON.stringify(storageData));
          }

        }





          ;}


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