import LogoutButton from "../Landingpage/login/Logoutbutton";
import React, { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Space } from "antd";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  Dropdown,
  Text,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import "./PostTest.css";
import axios from "axios";
import { post } from "jquery";
import UpdatePost from "./UpdatePost";
import Comment from "./Comment";
// import '../../test test/facebookcss.css'

function HomePost(props) {
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  // console.log(props.comments);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);

  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setImage(e.target.value);
  };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();

   ///////////////////////////////////////////

   const addPostODb = async () => {
    try {
      console.log(image);
      // e.preventDefault()
      const obj = {
        user_id: userData[0].id,
        paragraph_content: postText,
        post_date: readableDate,

        photo_content: image,
      };
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
      const result = await axios.post(serverUrl, obj);

      props.takeDataFromChild(result.data);
      console.log(result.data);

      setPostData(result.data[0]);
      setPosts(result.data);
    } catch (error) {
      console.log(`error add  post ${error}`);
    }
  };
  ///////////////////////////////////////////

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (postText.trim() === "") {
      return;
    }
    const newPost = {
      text: postText,
      comments: [],
    };
    addPostODb();

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setPostText(""); // Clear the post text input field
    event.target.reset()
  };

  const handleEditPost = (post) => {
    setShowUpdateModal(true);
    setPostData(post);
    props.takeDataFromChild(post.data);
  };

  const handleClosePost = () => {
    setShowUpdateModal(false);
  };

  const takeDataFromChild = (arr) => {
    setPosts(arr);
  };

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
    const result = await axios.get(serverUrl);
    setPosts(result.data);
  };
  useEffect(() => {
    sendReq();
  }, [posts]);

  const handleDeletePost = async (post) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${post.post_id}`;
      await axios.delete(serverUrl);
      sendReq();
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };
  //===============================
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
                <h4>{}</h4>
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

              <a href="profilepage" className="menu-item" id="notifications">
                <span>
                  <i className="uil uil-bell"></i>
                </span>
                <h3>Profile</h3>
                {/*------------- NOTIFICATION POPUP -------------*/}
                <div className="notifications-popup"></div>
                {/*------------- END NOTIFICATION POPUP -------------*/}
              </a>
              <a className="menu-item" href="job" id="messages-notifications">
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

              <a href="about" className="menu-item">
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
            <Form
              onSubmit={handlePostSubmit}
              action=""
              style={{ display: "flex" }}
              className="create-post"
            >
              {/* <div className="profile-photo">
                <img src="./images/profile-1.jpg" />
              </div> */}
              <input
                style={{ borderRadius: "100px", borderWidth: "0px" }}
                type="text"
                placeholder="Share your thoughts "
                id="create-post"
                onChange={handlePostChange}
              />
              <input
              style={{borderRadius:'100px',borderWidth:"0px"}}
                type="text"
                placeholder="put your photo link "
                id="create-post"
                onChange={handleChange}
              />
              <input
                type="submit"
                defaultValue="Post"
                className="btn btn-primary"
              />
            </Form>
            {/*--------------- FEEDS ------------------*/}
            {posts.map((post) => {
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
                            <h3>
                              {post.firstname} {post.lastname}
                            </h3>
                            <small>{post.career}</small>
                          </div>
                        </div>
                        {/* <span > */}

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
                        {/* </span> */}
                      </div>
                      <div className="photo">
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
                      <p style={{wordBreak:'break-word',fontSize:'18px', display:"flex"}}id="paragraphstyle"> {post.paragraph_content}</p>
                    </p>

                      {(post.photo_content !="" && post.photo_content !=null ) &&(
                     <img style={{margin:"auto", borderRadius:'0px', justifyContent:"center",borderRadius:"7px", width:"90%", height:"100%"}} src={post.photo_content} />
                     )}
                    
                  </div>
                      <hr></hr>
                      <br></br>
                      <div className="info">
                        <div>
                          {" "}
                          <Comment postID={post.post_id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            
            {/* <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-13.jpg" />
                </div>
                <div className="info">
                  <h3>Motasem</h3>
                  <small>Software Engineer</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <p>add image</p>
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
           
              
           
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
           
            </div>
            <div className="caption">
              <p>
                
             <p>add things here</p>
              </p>
            </div>
            <hr></hr>
            <div className="comments text-muted">View all 277 comments</div>
            <br></br>
            <div className="profile-photo">
                  <img src="./images/profile-13.jpg" />
                </div>
                <div className="info">
                  <p>Motasem</p>
                  <p>this is my comment</p>
                   */}
            {/* </div> */}
            {/* </div> */}

            {/*--------------- END OF FEED 1 ------------------*/}
            {/* </div> */}
            {/*--------------- END OF FEEDS ------------------ */}
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

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}
              {/* <div className="message">
                <div className="profile-photo">
                  <img src="./images/profile-15.jpg" />
                </div>
                <div className="message-body">
                  <h5>Benjamin Dwayne</h5>
                  <p className="text-muted">haha got that!</p>
                </div>
              </div> */}
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

      <UpdatePost
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}
        postData={postData}
        posts={posts}
        takeDataFromChild={takeDataFromChild}
      />
    </>
  );
}

export default HomePost;