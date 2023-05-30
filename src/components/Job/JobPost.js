import {
  Navbar,
  Nav,
  Modal,
  Container,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  Dropdown,
} from "react-bootstrap";
import SameCareer from './SameCareer';
import LogoutButton from "../Landingpage/login/Logoutbutton";
import React, { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Space } from "antd";

//=========================

//==========================

// import "./JobPost.css";
import axios from "axios";
import { post } from "jquery";

import UpdateJobPost from "./UpdateJobPost";
// import Comment from './Comment'
import JobComment from "./JobComment";
// import '../../test test/facebookcss.css';
// import './JobPost.css'
function JobPost(props) {
  const [postText, setPostText] = useState("");
  const [postCity, setPostCity] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobField, setjobField] = useState("");
  const [JobPosts, setJobPosts] = useState([]);
  const [postData, setPostData] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  // const dateInputRef = useRef(null);
  // const handleChange = (e) => {
  // setImage(e.target.value);
  // };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();

  ///////////////////////////////////////////

  const addPostODb = async () => {
    try {
      // e.preventDefault()

      const obj = {
        user_id: userData[0].id,
        job_post_content: postText,
        job_title: jobTitle,
        job_field: jobField,
        job_city: postCity,
      };
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}job`;
      const result = await axios.post(serverUrl, obj);
      // setPostText(result.data)
      console.log(result.data[0]);
      setPostData(result.data[0]);
      setJobPosts(result.data);
      // setPostText("")
      console.log(obj);
    } catch (error) {
      console.log(`error add  post ${error}`);
    }
  };
  ///////////////////////////////////////////
  // useEffect(()=>{
  //   addPostODb()
  // },[])
  // console.log(postText)

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };
  const handlePostCity = (event) => {
    setPostCity(event.target.value);
  };
  const handleJobTitle = (event) => {
    setjobTitle(event.target.value);
  };
  const handleJobField = (event) => {
    setjobField(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();

    if (postText.trim() === "") {
      return; // Skip empty JobPosts
    }

    // const newPost = {
    //   id: Date.now(),
    //   text: postText,
    //   comments: [],
    // };
    const newPost = {
      job_post_content: postText,
      job_title: jobTitle,
      job_field: jobField,
      job_city: postCity,
    };
    addPostODb();
    setJobPosts((prevPosts) => [newPost, ...prevPosts]);
    setPostText("");
    event.target.reset()
  };
  // console.log(JobPosts);

  const handleEditPost = (post) => {
    setShowUpdateModal(true);
    setPostData(post);
  };
  const handleClosePost = () => {
    setShowUpdateModal(false);
  };

  const takeDataFromChild = (arr) => {
    setJobPosts(arr);
    // props.takeDataFromFirstChild(arr)
  };

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}job`;
    const result = await axios.get(serverUrl);
    setJobPosts(result.data);
    setPostText("");
    // setJobPosts(props.postDataArray);
  };
  useEffect(() => {
    sendReq();
    // console.log(postDataArray)
  }, [JobPost]);

  // const [filterJobField, setFilterJobField] = useState("");
  // const [filterJobCity, setFilterJobCity] = useState("");

  //////////////////////////////////////////////////////////////////////////////////////////////////

  const [searchJobs, setSearchJobs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.job_field.value);
    console.log(e.target.job_city.value);

    const serverUrl = `${process.env.REACT_APP_SERVER_URL}jobbyfieldcity`;
    const obj = {
      job_field: e.target.job_field.value,
      job_city: e.target.job_city.value,
    };

    const result = await axios.post(serverUrl, obj);
    setJobPosts(result.data);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // const handleAddComment = (postId, commentText) => {
  //   const newComment = {
  //     id: Date.now(),
  //     text: commentText,
  //   };

  //   setJobPosts((prevPosts) => {
  //     const updatedPosts = prevPosts.map((post) => {
  //       if (post.id === postId) {
  //         return {
  //           ...post,
  //           comments: [...post.comments, newComment],
  //         };
  //       }
  //       return post;
  //     });
  //     return updatedPosts;
  //   });
  // };

  const handleDeletePost = async (post) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}job/${post.job_id}`;
      await axios.delete(serverUrl);
      sendReq();
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };

  console.log(postData);
  console.log(JobPosts);

  const logoutButtonRef = useRef(null); //loginref
  const handleButtonClick2 = () => {
    // Call the button click handler in Component1
    // by accessing the ref and invoking its click method
    // This will trigger the click event on the button in Component1
    logoutButtonRef.current.handleButtonClick();
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        mySocial - Responsive Social Media Website Using HTML, CSS, &amp;
        JavaScript
      </title>
      {/* IconScout CDN */}
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"
      />
      {/* Stylesheet */}
      <link rel="stylesheet" href="./style.css" />
      <nav>
        <div className="container">
          <h2 className="logo">CareerConnect</h2>
          <div className="search-bar">
            <i className="uil uil-search" />
            <input
              style={{ borderRadius: "100px", borderWidth: "0px" }}
              type="search"
              placeholder="Search for creators, inspirations, and projects"
            />
          </div>
          <div className="create">
            <LogoutButton ref={logoutButtonRef} />
            <Button
              danger
              type="primary"
              shape="round"
              size={"large"}
              onClick={handleButtonClick2}
            >
              {" "}
              sign out
            </Button>
            {/* <div className="profile-photo">
            <img src="./images/profile-1.jpg" alt="" />
          </div> */}
          </div>
        </div>
      </nav>
      {/*------------------------------ MAIN ---------------------------------*/}
      <main>
        <div className="container">
          {/*--------------- LEFT ------------------*/}
          <div className="left">
            {/* <a className="profile">
            <div className="profile-photo">
              <img src="./images/profile-1.jpg" />
            </div>
            <div className="handle">
              <h4>Motasem</h4>
              <p className="text-muted">......</p>
            </div>
          </a> */}
            {/*--------------- SIDEBAR ------------------*/}
            <div className="sidebar">
              <a className="menu-item " href="home">
                <span>
                  <i className="uil uil-home" />
                </span>
                <h3>Home</h3>
              </a>

              <a className="menu-item" href="profilepage" id="notifications">
                <span>
                  <i className="uil uil-bell"></i>
                </span>
                <h3>Profile</h3>
                {/*------------- NOTIFICATION POPUP -------------*/}
                <div className="notifications-popup"></div>
                {/*------------- END NOTIFICATION POPUP -------------*/}
              </a>
              <a
                className="menu-item active "
                href="job"
                id="messages-notifications"
              >
                <span>
                  <i className="uil uil-envelope-alt"></i>
                </span>
                <h3>Jobs</h3>
              </a>
              {/* ++++++++++++++++ */}
              <a
                className="menu-item "
                href="portfolio"
                id="messages-notifications"
              >
                <span>
                  <i className="uil uil-envelope-alt"></i>
                </span>
                <h3>create resume</h3>
              </a>
              {/* ++++++++++++++++ */}
              <a className="menu-item " href="about">
                <span>
                  <i className="uil uil-chart-line" />
                </span>
                <h3>AbotuUs</h3>
              </a>
            </div>
            {/*--------------- END OF SIDEBAR ------------------*/}
            <label className="btn btn-primary" htmlFor="create-post">
              Create Post
            </label>
          </div>
          {/*--------------- MIDDLE ------------------*/}
          <div style={{width:"600px"}} className="middle">
            {/*--------------- STORIES ------------------*/}

            {/*--------------- END OF STORIES ------------------*/}
            <Form onSubmit={handlePostSubmit} action="" className="create-post">
              <Form.Group>
                <textarea
                  rows="4"
                  cols="50"
                  id="create-post"
                  style={{
                    marginBottom: "8px",
                    marginTop: "8px",
                    borderRadius: "10px",
                    borderWidth: "1px",
                    wordBreak: "break-all",
                    // minWidth: "600px",
                    width:"557px",
                    whiteSpace: "preLine",
                  }}
                  type="text-area"
                  placeholder="Job description "
                  // id="create-post"
                  onChange={handlePostChange}
                ></textarea>
              </Form.Group>

              <Form.Group>
                <input
                  style={{
                    marginBottom: "8px",
                    borderRadius: "100px",
                    borderWidth: "1px",
                  }}
                  type="text"
                  placeholder="enter city"
                  id="create-post"
                  onChange={handlePostCity}
                />
              </Form.Group>
              <Form.Group>
                <input
                  style={{
                    marginBottom: "8px",
                    borderRadius: "100px",
                    borderWidth: "1px",
                  }}
                  type="text"
                  placeholder="enter job Field"
                  id="create-post"
                  onChange={handleJobField}
                />
              </Form.Group>
              <Form.Group>
                <input
                  style={{
                    marginBottom: "8px",
                    borderRadius: "100px",
                    borderWidth: "1px",
                  }}
                  type="text"
                  placeholder="enter job title"
                  id="create-post"
                  onChange={handleJobTitle}
                />
              </Form.Group>
              <input
                style={{ borderRadius: "100px", borderWidth: "1px" }}
                type="submit"
                defaultValue="Post"
                className="btn btn-primary"
              />
            </Form>
            {/*--------------- FEEDS ------------------*/}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="right">
              {/*----- MESSAGES -----*/}
              <div className="messages">
                <div >
                  {/* <i className="uil uil-edit" /> */}
                  <h4>Find Your Job</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Form.Group>
                      <Form.Label>Job Field</Form.Label>
                      <Form.Control
                        name="job_field"
                        type="text"
                        defaultValue=""
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Job City</Form.Label>
                      <Form.Control
                        name="job_city"
                        type="text"
                        defaultValue=""
                      />
                    </Form.Group>
                  </Form.Group>
                  {/* <Button  type="submit" style={{margin:'30px', marginBottom:"5px", borderRadius: "100px", borderWidth: "1px"}}  >  
                Search
              </Button> */}

                  <input
                    style={{ margin:'30px', marginBottom:"5px", borderRadius: "100px", borderWidth: "1px" }}
                    type="submit"
                    defaultValue="Post"
                    className="btn btn-primary"
                  />
                </Form>
              </div>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {JobPosts.map((post) => {
              return (
                <>
                  <div className="feeds">
                    {/* <HomePost/> */}
                    {/*--------------- FEED 1 ------------------*/}
                    <div className="feed">
                      <div className="head">
                        <div className="user">
                          <div className="profile-photo">
                            <img
                              src={post.profilepicture}
                              style={{ width: "60px", height: "60px" }}
                            />
                          </div>
                          <div className="info">
                            <h3>{post.firstname}</h3>
                            <small>{post.career}</small>
                          </div>
                        </div>

                        {post.user_id == userData[0].id && (
                          <Dropdown className="edit">
                            <Dropdown.Toggle
                              id="mm"
                              variant="primary"
                              className="dropdown-toggle-vertical"
                              // className="uil uil-ellipsis-h"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleEditPost(post)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDeletePost(post)}
                              >
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      </div>
                      <div className="photo">
                        <p>{post.photo_content}</p>
                      </div>
                      <div className="action-buttons">
                        <div className="interaction-buttons"></div>
                        <div className="bookmark">
                          <span>
                            <i className="uil uil-bookmark-full" />
                          </span>
                        </div>
                      </div>
                      <div className="liked-by"></div>
                      <div className="caption">
                        <div>
                          <p
                            style={{
                              wordBreak: "break-word",
                              fontSize: "18px",
                              
                            }}
                            id="paragraphstyle"
                          >
                            {" "}
                            {post.job_field}
                          </p>
                          <p
                            style={{
                              wordBreak: "break-word",
                              fontSize: "18px",
                            }}
                            id="paragraphstyle"
                          >
                            {" "}
                            {post.job_title}
                          </p>
                          <p
                            style={{
                              wordBreak: "break-word",
                              fontSize: "18px",
                            }}
                            id="paragraphstyle"
                          >
                            {" "}
                            {post.job_city}
                          </p>
                          <p style={{ fontSize: "18px" }}>
                            {" "}
                            {post.job_post_content}
                          </p>
                          <p
                            style={{
                              wordBreak: "break-word",
                              fontSize: "19px",
                            }}
                            id="paragraphstyle"
                          >
                            {" "}
                            {post.email}
                          </p>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                      <hr></hr>
                      <br></br>
                      <div className="info">
                        <div>
                          <JobComment postID={post.job_id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/*--------------- END OF MIDDLE ------------------*/}
          {/*--------------- RIGHT ------------------*/}
          <div className="right">
            {/*----- MESSAGES -----*/}
            <div className="messages">
              <div className="heading">
                <h4>Messages</h4>
                <i className="uil uil-edit" />
              </div>
              {/*----- SEARCH BAR -----*/}
              <div className="search-bar">
                <i className="uil uil-search" />
                <input
                  style={{ borderRadius: "100px", borderWidth: "0px" }}
                  type="search"
                  placeholder="Search messages"
                  id="message-search"
                />
              </div>
              {/*----- MESSAGES CATEGORY -----*/}
            </div>
            {/*----- END OF MESSAGES -----*/}
            {/*----- FRIEND REQUEST -----*/}
            <div className="friend-requests">
              <h4>People With Same Career</h4>

              <div className="request" style={{marginLeft:"0px"}}>
              <div className="info">
                <div className="profile-photo">
                </div>
                <div>
                  <SameCareer/>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/*--------------- END OF RIGHT ------------------*/}
        </div>
      </main>
      {/*--------------- THEME CUSTOMIZATION ------------------*/}
      <div className="customize-theme">
        <div className="card">
          <h2>Customize your view</h2>
          <p className="text-muted">
            Manage your font size, color, and background
          </p>
          {/*--------- FONT SIZE ---------*/}
          <div className="font-size">
            <h4>Font Size</h4>
            <div>
              <h6>Aa</h6>
              <div className="choose-size">
                <span className="font-size-1" />
                <span className="font-size-2 active" />
                <span className="font-size-3" />
                <span className="font-size-4" />
                <span className="font-size-5" />
              </div>
              <h3>Aa</h3>
            </div>
          </div>
          {/*--------- PRIMARY COLORS ---------*/}
          <div className="color">
            <h4>Color</h4>
            <div className="choose-color">
              <span className="color-1 active" />
              <span className="color-2" />
              <span className="color-3" />
              <span className="color-4" />
              <span className="color-5" />
            </div>
          </div>
          {/*--------- BACKGROUND COLORS ---------*/}
          <div className="background">
            <h4>Background</h4>
            <div className="choose-bg">
              <div className="bg-1 active">
                <span />
                <h5 htmlFor="bg-1">Light</h5>
              </div>
              <div className="bg-2">
                <span />
                <h5 htmlFor="bg-2">Dim</h5>
              </div>
              <div className="bg-3">
                <span />
                <h5 htmlFor="bg-3">Dark</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpdateJobPost
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}
        postData={postData}
        JobPosts={JobPosts}
        takeDataFromChild={takeDataFromChild}
      />
    </>
  );
}
export default JobPost;
