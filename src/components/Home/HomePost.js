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
import {Link} from "react-router-dom"

import React, { useEffect, useState } from "react";
// import "./PostTest.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdatePost from "./UpdatePost";
import Comment from "./Comment";
import '../../test test/facebookcss.css'

function HomePost(props) {
  const storedUserData = localStorage.getItem("userId");
  const userData =JSON.parse(storedUserData)
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
    console.log(image);
  };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();

  ///////////////////////////////////////////

  const addPostODb = async () => {
    try {
      console.log(image);
      // e.preventDefault()
      const obj = {
        user_id:userData[0].id,
        paragraph_content: postText,
        post_date: readableDate,

        photo_content: image,
      };
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
      const result = await axios.post(serverUrl, obj);

      props.takeDataFromChild(result.data);
      console.log(result.data)

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
            style={{borderRadius:'100px',borderWidth:"0px"}}
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

              <a href="profilepage"className="menu-item" id="notifications">
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

              <a href="aboutus"className="menu-item">
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
              <input
              style={{borderRadius:'100px',borderWidth:"0px"}}
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
                        <img src={post.profilepicture} style={{width:'60px',height:'60px'}} />
                      </div>
                      <div className="info">
                        <h3>{post.firstname} {post.lastname}</h3>
                        <small>{post.career}</small>
                      </div>
                    </div>
                    {/* <span > */}

                    {(post.user_id == userData[0].id)&&(
                      <Dropdown className="edit"
                               
                                >
                                  <Dropdown.Toggle id="mm"
                                    variant="primary"
                                    className="dropdown-toggle-vertical"
                                    // className="uil uil-ellipsis-h"
                                  >
                                  
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      onClick={() => handleEditPost(post)}
                                    >
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() =>
                                        handleDeletePost(post)
                                      }
                                    >
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>)}
                    {/* </span> */}
                  </div>
                  <div className="photo">
                    {/* <p>{post.photo_content}</p> */}
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
                    {/* <p> */}
                      <p> {post.paragraph_content}</p>
                      {(post.photo_content !="" && post.photo_content !=null ) &&(
                      <div className="post-photo-box" style={{marginLeft:"50px", justifyContent:"center", width:"200px", height:"200px"}}>
                     <img style={{marginLeft:"120px",marginBottom:"5px",marginRight:"120px",marginTop:"5px", borderRadius:'0px', justifyContent:"center", width:"100%", height:"100%"}} src={post.photo_content} />
                     </div>)}
                    {/* </p> */}
                  </div>
                  <hr></hr>
                  <br></br>
                  <div className="info">
                    <div> <Comment postID={post.post_id} /></div>
                  </div>
                </div>
                </div>
                </>
                )})}
          
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
                style={{borderRadius:'100px',borderWidth:"0px"}}
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


















// import {
//   Navbar,
//   Nav,
//   Container,
//   Form,
//   FormControl,
//   Button,
//   Row,
//   Col,
//   Card,
//   Dropdown,
// } from "react-bootstrap";

// import React, { useEffect, useState } from "react";
// import "./HomePost.css";
// import axios from "axios";
// import { post } from "jquery";
// import { useRef } from "react";
// import UpdatePost from "./UpdatePost";
// import Comment from "./Comment";

// function HomePost(props) {
//   const storedUserData = localStorage.getItem("userId");
//   const userData =JSON.parse(storedUserData)
//   // console.log(props.comments);
//   const [postText, setPostText] = useState("");
//   const [posts, setPosts] = useState([]);

//   const [image, setImage] = useState("");
//   const [comment, setComment] = useState("");
//   const [postData, setPostData] = useState({});
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const dateInputRef = useRef(null);
//   const handleChange = (e) => {
//     setImage(e.target.value);
//   };
//   const currentDate = new Date();
//   const readableDate = currentDate.toDateString();

//   ///////////////////////////////////////////

//   const addPostODb = async () => {
//     try {
//       // e.preventDefault()
//       const obj = {
//         user_id:userData[0].id,
//         paragraph_content: postText,
//         post_date: readableDate,

//         photo_content: image,
//       };
//       const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
//       const result = await axios.post(serverUrl, obj);

//       props.takeDataFromChild(result.data);
//       console.log(result.data)

//       setPostData(result.data[0]);
//       setPosts(result.data);
//     } catch (error) {
//       console.log(`error add  post ${error}`);
//     }
//   };
//   ///////////////////////////////////////////

//   const handlePostChange = (event) => {
//     setPostText(event.target.value);
//   };

//   const handlePostSubmit = (event) => {
//     event.preventDefault();
//     if (postText.trim() === "") {
//       return;
//     }
//     const newPost = {
//       text: postText,
//       comments: [],
//     };
//     addPostODb();
//     setPosts((prevPosts) => [newPost, ...prevPosts]);
//     setPostText(""); // Clear the post text input field
//   };

//   const handleEditPost = (post) => {
//     setShowUpdateModal(true);
//     setPostData(post);
//     props.takeDataFromChild(post.data);
//   };

//   const handleClosePost = () => {
//     setShowUpdateModal(false);
//   };

//   const takeDataFromChild = (arr) => {
//     setPosts(arr);
//   };

//   const sendReq = async () => {
//     const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
//     const result = await axios.get(serverUrl);
//     setPosts(result.data);
//   };
//   useEffect(() => {
//     sendReq();
//   }, [posts]);

//   const handleDeletePost = async (post_id) => {
//     try {
//       const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${post_id}`;
//       await axios.delete(serverUrl);
//       sendReq();
//     } catch (error) {
//       console.log(`error deleting post ${error}`);
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col
//           >
//             <h1>Share your thoughts here</h1>
//             <Form onSubmit={handlePostSubmit}>
//               <Form.Group controlId="postForm">
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="What's on your mind?"
//                   onChange={handlePostChange}
//                 />
//                 <Form.Group controlId="formFile" className="mb-3">
//                   <Form.Control
//                     name="profile_picture"
//                     type="file"
//                     onChange={handleChange}
//                     ref={dateInputRef}
//                   />
//                 </Form.Group>
//               </Form.Group>
//               <Button
//                 onClick={handlePostSubmit}
//                 className="btnpost"
//                 variant="primary"
//                 type="submit"
//               >
//                 Post
//               </Button>
//             </Form>

//             {/* profilePicture: e.target.profile_picture.value, */}
//             <hr />

//             <>
//               <div className="posts-container" >
//                 {posts.map((post) => {
//                   return (
//                     <>
//                       <meta charSet="UTF-8" />
//                       <title>Social Media Post UI Design</title>
//                       <meta
//                         content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
//                         name="viewport"
//                       />
//                       <link
//                         rel="stylesheet"
//                         type="text/css"
//                         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//                       />
//                       <link
//                         rel="stylesheet"
//                         href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//                       />
//                       <link
//                         rel="stylesheet"
//                         type="text/css"
//                         href="css/style.css"
//                       />
//                       <section className="main-content" id="main-content">
//                         <div className="container">
//                           <h1 className="text-center text-uppercase"></h1>
//                           <br />
//                           <br />
//                           <div className="row">
//                             <div className="col-sm-6 offset-sm-3">
//                               <div
//                                 className="post-block" 
//                                 style={{ position: "relative" ,background:'#DDE6ED'  }}
//                               >
//                                 <Dropdown
//                                   align="end"
//                                   style={{
//                                     position: "absolute",
//                                     top: "25px",
//                                     right: "25px",
//                                   }}
//                                 >
//                                   <Dropdown.Toggle
//                                     variant="primary"
//                                     className="dropdown-toggle-vertical"
//                                   >
                                  
//                                   </Dropdown.Toggle>
//                                   <Dropdown.Menu>
//                                     <Dropdown.Item
//                                       onClick={() => handleEditPost(post)}
//                                     >
//                                       Edit
//                                     </Dropdown.Item>
//                                     <Dropdown.Item
//                                       onClick={() =>
//                                         handleDeletePost(post.post_id)
//                                       }
//                                     >
//                                       Delete
//                                     </Dropdown.Item>
//                                   </Dropdown.Menu>
//                                 </Dropdown>
//                                 <div className="d-flex justify-content-between">
//                                   <div className="d-flex mb-3">
//                                     <div className="mr-2">
//                                       <a href="#!" className="text-dark">
//                                         <img
//                                           src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
//                                           alt="User"
//                                           className="author-img"
//                                         />
//                                       </a>
//                                     </div>
//                                     <div>
//                                       <h5 className="mb-0">
//                                         <a href="#!" className="text-dark">
//                                           <p>{post.firstname}</p>
//                                         </a>
//                                       </h5>
//                                       <p className="mb-0 text-muted">
//                                         {post.career}
//                                       </p>
//                                       {/* <p className="mb-0 text-muted">5m</p>             edit date */}
//                                     </div>
//                                   </div>
//                                   <div className="post-block__user-options">
//                                     <a
//                                       href="#!"
//                                       id="triggerId"
//                                       data-toggle="dropdown"
//                                       aria-haspopup="true"
//                                       aria-expanded="false"
//                                     ></a>
//                                     <div
//                                       className="dropdown-menu dropdown-menu-right"
//                                       aria-labelledby="triggerId"
//                                     >
//                                       < a
//                                         className="dropdown-item text-dark"
//                                         href="#!"
//                                       >
//                                         <i className="fa fa-pencil mr-1" />
//                                         Edit
//                                       </a>
//                                       <a
//                                         className="dropdown-item text-danger"
//                                         href="#!"
//                                       >
//                                         <i className="fa fa-trash mr-1" />
//                                         Delete
//                                       </a>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="post-block__content mb-2">
//                                   <p
//                                     style={{
//                                       wordBreak: "break-word",
//                                     }}
//                                   >
//                                     {post.paragraph_content}
//                                     {/* <p>{props.postComment.content}</p> */}
//                                   </p>
//                                   <img
//                                     src={post.photo_content}
//                                     alt="Content img"
//                                   />
//                                   <p>{post.post_date}</p>
//                                 </div>
//                                 <div className="mb-3">
//                                   <div className="d-flex justify-content-between mb-2">
//                                     <div className="d-flex"></div>
//                                   </div>
//                                   <p className="mb-0"></p>
//                                 </div>
//                                 <hr />
//                                 <div className="post-block__comments">
//                                   {/* Comment Input */}
//                                   <div className="input-group mb-3">
//                                     <div className="input-group-append"></div>
//                                   </div>

//                                   <div className="comment-view-box mb-3">
//                                     <div > {/* here was the class name d-flex mb-2 */}
//                                       <div >
//                                         <Comment postID={post.post_id} />

//                                         <div className="d-flex">
//                                           <a
//                                             href="#!"
//                                             className="text-dark mr-2"
//                                           >
//                                             <span>
//                                               <i className="fa fa-heart-o" />
//                                             </span>
//                                           </a>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                     </>
//                   );
//                 })}
//               </div>
//             </>
//           </Col>
//         </Row>
//       </Container>
//       <footer className="bg-dark text-white text-center p-4">
//         <Container>
//           <p>&copy; 2023 My Website. All rights reserved.</p>
//         </Container>
//       </footer>

//       <UpdatePost
//         showUpdateModal={showUpdateModal}
//         handleClosePost={handleClosePost}
//         postData={postData}
//         posts={posts}
//         takeDataFromChild={takeDataFromChild}
      
//       />
      
//       {/* <Comment comments={props.commentsDataArray} /> */}
//     </div>
//   );
// }

// export default HomePost;
