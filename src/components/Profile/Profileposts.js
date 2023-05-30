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
  Text,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import "./PostTest.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdatePost from "../Home/UpdatePost";
import Comment from "../Home/Comment";
import "../../test test/facebookcss.css";

function Profileposts(props) {
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  //////////////////////////////////////////////////
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const [postData, setPostData] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setImage(e.target.value);
  };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();
  ///////////////////////////////////////////
  // const [postDataArray, setPostDataArray] = useState([]);
  // console.log("helllllo");
  // const getPostFromDb = async () => {
  //   const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${userData[0].id}`;
  //   const result = await axios.get(serverUrl);
  //   setPostDataArray(result.data);
  // };
  // useEffect(() => {
  //   getPostFromDb();
  // }, []);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}userposts/${userData[0].id}`;
    const result = await axios.get(serverUrl);
    setPosts(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    sendReq();
  }, [posts]); //posts
  //////////////////////////////////////////////////////////
  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };
  const handleEditPost = (post) => {
    setShowUpdateModal(true);
    setPostData(post);
    // props.takeDataFromChild(post.data);
  };
  const handleClosePost = () => {
    setShowUpdateModal(false);
  };
  const takeDataFromChild = (arr) => {
    setPosts(arr);
  };
  const handleDeletePost = async (post) => {
    if (post.user_id == userData[0].id) {
      try {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${post.post_id}`;
        await axios.delete(serverUrl);
        sendReq();
      } catch (error) {
        console.log(`error deleting post ${error}`);
      }
    }
  };
  return (
    <>
      {/* {console.log(userData[0].id)} */}
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
              <a className="menu-item ">
                <span>
                  <i className="uil uil-home" />
                </span>
                <h3>Home</h3>
              </a>
              <a className="menu-item active" id="notifications">
                <span>
                  <i className="uil uil-bell"></i>
                </span>
                <h3>Profile</h3>
                {/*------------- NOTIFICATION POPUP -------------*/}
                <div className="notifications-popup"></div>
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
            {/*--------------- FEEDS ------------------*/}
            {/* ////////////////////////////////////////////////////////////////// */}
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
                            <img src={post.profilepicture} />
                          </div>
                          <div className="info">
                            <h3>{post.firstname}</h3>
                            <small>{post.career}</small>
                          </div>
                        </div>
                        {/* <span > */}
                        <Form>
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
                        </Form>
                        {/* </span> */}
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
                          <p> {post.paragraph_content}</p>
                        </p>
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
                    ;
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
                  
                      <p> {post.paragraph_content}</p>
                      
                      {(post.photo_content !="" ) &&(
                      <div className="post-photo-box" style={{marginLeft:"50px", justifyContent:"center", width:"200px", height:"200px"}}>
                     <img style={{marginLeft:"120px",marginBottom:"5px",marginRight:"120px",marginTop:"5px", borderRadius:'0px', justifyContent:"center", width:"100%", height:"100%"}} src={post.photo_content} />
                     </div>)}
                    
                  </div>
                  <hr></hr>
                  <br></br>
                  <div className="info">
                    <div> <Comment postID={post.post_id} /></div>
                  </div>
                </div>;
                </div>;
                  ;
                </>
              );
            })}
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
                  type="search"
                  placeholder="Search messages"
                  id="message-search"
                />
              </div>
            </div>
            <div className="friend-requests">
              <h4>Requests</h4>
            </div>
          </div>
          {/*--------------- END OF RIGHT ------------------*/}
        </div>
      </main>
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

export default Profileposts;
