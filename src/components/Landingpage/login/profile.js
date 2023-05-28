import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./profile.css";
import Test from "./Test";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  /*---------------------------checking if the user exists in the database --------------------------------------*/
  const [emailExist, setemailExist] = useState(false);
  useEffect(() => {
    if (!user) return;
    if (isAuthenticated) {
      const storeUserData = async () => {
        // Check if the email already exists in your database
        const checkEmailExists = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}users`
        );

        for (let i = 0; i < checkEmailExists.data.length; i++) {
          if (user.email == checkEmailExists.data[i].email) {
            setemailExist(true);
            console.log(checkEmailExists.data[i].id);
            const storageData = [checkEmailExists.data[i]];
            console.log(checkEmailExists.data[i]);
            localStorage.setItem("userId", JSON.stringify(storageData));
          }
        }
        if (emailExist == false) {
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}users`,
            {
              email: user.email,
              profilepicture: user.picture,

              // Add other relevant user data fields
            }
          );

          const checkEmailExists = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}users`
          );

          for (let i = 0; i < checkEmailExists.data.length; i++) {
            if (user.email == checkEmailExists.data[i].email) {
              setemailExist(true);
              console.log(checkEmailExists.data[i].id);
              const storageData = [checkEmailExists.data[i]];

              localStorage.setItem("userId", JSON.stringify(storageData));
            }
          }
        }
      };
      // console.log("User data stored successfully:", response.data);
      storeUserData();
    }
  }, [isAuthenticated, user]);
  if (!isAuthenticated || !user) {
    // Render loading or authentication components
    return <div></div>;
  }
  /*--------------------------------------background animation---------------------------------------------------*/
  //background animation

  return (
    <>
      {console.log(user)}
      {emailExist == false ? (
        <>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Fade cascade damping={1.0}>
              <h1>Welcome {user.given_name}</h1>
              <h3>enjoy the experience </h3>
              <a href="http://localhost:3000/personalform">
                {" "}
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                ></Button>
              </a>
            </Fade>
          </div>
        </>
      ) : (
        <>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Fade cascade damping={1.0}>
              <h1>Welcome {user.given_name}</h1>
              <h3>enjoy the experience </h3>
              <a href="http://localhost:3000/home">
                {" "}
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                ></Button>
              </a>
            </Fade>
          </div>
        </>
      )}
    </>
  );
};
export default Profile;
