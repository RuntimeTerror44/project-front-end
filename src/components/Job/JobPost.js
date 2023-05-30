import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Card,
  Dropdown,
} from "react-bootstrap";
// import "./JobPost.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdateJobPost from "./UpdateJobPost";
// import Comment from './Comment'
import JobComment from "./JobComment";
import "../../test test/facebookcss.css";
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
  };
  console.log(JobPosts);

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
              type="search"
              placeholder="Search for creators, inspirations, and projects"
            />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">
              SignOut
            </label>
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
              <a className="menu-item active">
                <span>
                  <i className="uil uil-home" />
                </span>
                <h3>Home</h3>
              </a>

              <a className="menu-item" id="notifications">
                <span>
                  <i className="uil uil-bell"></i>
                </span>
                <h3>Profile</h3>
                {/*------------- NOTIFICATION POPUP -------------*/}
                <div className="notifications-popup">
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-2.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </div> */}
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-3.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>John Doe</b> commented on your post
                    <small className="text-muted">1 Hour Ago</small>
                  </div>
                </div> */}
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-4.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>Marry Oppong</b> and <b>283 Others</b> liked your post
                    <small className="text-muted">4 Minutes Ago</small>
                  </div>
                </div> */}
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-5.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>Doris Y. Lartey</b> commented on a post you are tagged
                    in
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </div> */}
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-6.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>Keyley Jenner</b> commented on a post you are tagged in
                    <small className="text-muted">1 Hour Ago</small>
                  </div>
                </div> */}
                  {/* <div>
                  <div className="profile-photo">
                    <img src="./images/profile-7.jpg" />
                  </div>
                  <div className="notification-body">
                    <b>Jane Doe</b> commented on your post
                    <small className="text-muted">1 Hour Ago</small>
                  </div>
                </div> */}
                </div>
                {/*------------- END NOTIFICATION POPUP -------------*/}
              </a>
              <a className="menu-item" id="messages-notifications">
                <span>
                  <i className="uil uil-envelope-alt"></i>
                </span>
                <h3>Jobs</h3>
              </a>

              <a className="menu-item">
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
          <div className="middle">
            {/*--------------- STORIES ------------------*/}

            {/*--------------- END OF STORIES ------------------*/}
            <Form onSubmit={handlePostSubmit} action="" className="create-post">
              {/* <div className="profile-photo">
              <img src="./images/profile-1.jpg" />
            </div> */}
            <Form.Group>
              <input
                type="text"
                placeholder="Share your thoughts "
                // id="create-post"
                onChange={handlePostChange}
              />
              </Form.Group>
              <br></br>
              <Form.Group>
              <input
                type="text"
                placeholder="enter city"
                id="create-post"
                onChange={handlePostCity}
              />
              </Form.Group>
              <Form.Group>
              <input
                type="text"
                placeholder="enter job Field"
                id="create-post"
                onChange={handleJobField}
              />
              </Form.Group>
              <Form.Group>
              <input
                type="text"
                placeholder="enter job title"
                id="create-post"
                onChange={handleJobTitle}
              />
              </Form.Group>
              <input
                type="submit"
                defaultValue="Post"
                className="btn btn-primary"
              />
            </Form>
            {/*--------------- FEEDS ------------------*/}
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
                            <img src={post.profilepicture} />
                          </div>
                          <div className="info">
                            <h3>{post.firstname}</h3>
                            <small>{post.career}</small>
                          </div>
                        </div>

                        {post.user_id == userData[0].id && (
                          <Dropdown className="edit">
                            <Dropdown.Toggle
                              variant="primary"
                              // className="dropdown-toggle-vertical"
                              className="uil uil-ellipsis-h"
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
                        <p>
                          <p> {post.job_post_content}</p>
                          <p> {post.job_city}</p>
                          <p> {post.job_field}</p>
                          <p> {post.job_title}</p>
                        </p>
                      </div>
                      <div></div>
                      <div></div>
                      <hr></hr>
                      <br></br>
                      <div className="info">
                        <div>
                          {" "}
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
              <h4>Requests</h4>

              {/* <div className="request">
              <div className="info">
                <div className="profile-photo">
                  <img src="./images/profile-17.jpg" />
                </div>
                <div>
                  <h5>Megan Baldwin</h5>
                  <p className="text-muted">5 mutual friends</p>
                </div>
              </div>
            </div> */}
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
