import React, { useEffect, useState } from "react";
import HomePost from "./HomePost";
import axios from "axios";
import "./HomePost.css";
function Home() {
  /////////////////// get the posts from data base//////////////////////
  const [postDataArray, setPostDataArray] = useState([]);
console.log("helllllo");
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
  },[]);
  // getPostFromDb();
  // getCommentsFromDb();


  return (
    <>
    {/* {commentsDataArray ? 
      <HomePost postDataArray={postDataArray}  comments={commentsDataArray}/>
    
    : <></>} */}
           <HomePost postDataArray={postDataArray}/>


    </>
  );
}
export default Home;