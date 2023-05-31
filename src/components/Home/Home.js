import React, { useEffect, useState } from "react";
import HomePost from "./HomePost";
import axios from "axios";
import "./HomePost.css";
import Nav from "./Nav";
import ProfileTemp from "../Profile/ProfileTemp";
// import Feedback from "react-bootstrap/esm/Feedback";
function Home() {
  /////////////////// get the posts from data base//////////////////////
  const [postDataArray, setPostDataArray] = useState([]);
  // console.log("helllllo");
  const getPostFromDb = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
    const result = await axios.get(serverUrl);
    setPostDataArray(result.data);
  };

  //-----------------------------------------------------
  // const getCommentsFromDb = async () => {
  //   const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments`;
  //   const result = await axios.get(serverUrl);
  //     setCommentsDataArray(result.data)
  //   }

  
  useEffect(() => {
    getPostFromDb();
    // getCommentsFromDb();
  }, [postDataArray]);
  // getPostFromDb();
  // getCommentsFromDb();

  const takeDataFromChild = (arr) => {
    setPostDataArray(arr);
  };

  return (
    <>
  <h3>Welcome to home page</h3>
      {commentsDataArray ? 
      <HomePost postDataArray={postDataArray}  comments={commentsDataArray}/>
    
    : <></>}
      <HomePost
        postDataArray={postDataArray}
        takeDataFromChild={takeDataFromChild}
      />
      <ProfileTemp
        postDataArray={postDataArray}
        takeDataFromChild={takeDataFromChild}
      />
   <PostTest  postDataArray={postDataArray}
        takeDataFromChild={takeDataFromChild}/> 
  
    </>
  );
}
export default Home;
