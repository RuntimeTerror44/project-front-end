import React, { useEffect, useState } from 'react';
import JobPost from "./JobPost";
import axios from 'axios';
import './JobPost.css'
import Nav from '../Home/Nav';
function Job(){
  /////////////////// get the posts from data base//////////////////////
  const [postDataArray, setPostDataArray]= useState([])
  const getPostFromDb= async()=>{
    const serverUrl=`${process.env.REACT_APP_SERVER_URL}job`
    const result= await axios.get(serverUrl)
    setPostDataArray(result.data)
  }
  console.log(postDataArray)
  // const takeDataFromFirstChild=(arr)=>{
  //   setPostDataArray(arr)
  // }
  useEffect(()=>{
    getPostFromDb()
    // console.log(postDataArray)
  },[])

  // console.log(postDataArray)
  /////////////////////////////////////////
  
  /////////////////////////////////////////
  
  return(
    <>
    <Nav/>
    this is job page
    <JobPost postDataArray={postDataArray}/>
    </>
  )
}
export default Job;
