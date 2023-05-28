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

import React, { useEffect, useState } from "react";
import "./HomePost.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdatePost from "./UpdatePost";
import Comment from "./Comment";
import Facebook from "../../test test/facebook";

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
  };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();

  ///////////////////////////////////////////

  const addPostODb = async () => {
    try {
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
    if (post.user_id == userData[0].id){
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
    <div>
      <Container>
        <Row>
          <Col
          >
            <h1>Share your thoughts here</h1>
            <Form onSubmit={handlePostSubmit}>
              <Form.Group controlId="postForm">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's on your mind?"
                  onChange={handlePostChange}
                />
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    name="profile_picture"
                    type="file"
                    onChange={handleChange}
                    ref={dateInputRef}
                  />
                </Form.Group>
              </Form.Group>
              <Button
                onClick={handlePostSubmit}
                className="btnpost"
                variant="primary"
                type="submit"
              >
                Post
              </Button>
            </Form>

            {/* profilePicture: e.target.profile_picture.value, */}
            <hr />

            <>
              <div className="posts-container" >
                {posts.map((post) => {
                  return (
                    <>
                      <meta charSet="UTF-8" />
                      <title>Social Media Post UI Design</title>
                      <meta
                        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                        name="viewport"
                      />
                      <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      />
                      <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      />
                      <link
                        rel="stylesheet"
                        type="text/css"
                        href="css/style.css"
                      />
                      <section className="main-content" id="main-content">
                        <div className="container">
                          <h1 className="text-center text-uppercase"></h1>
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-sm-6 offset-sm-3">
                              <div
                                className="post-block" 
                                style={{ position: "relative" ,background:'#DDE6ED'  }}
                              >
                                <Dropdown
                                  align="end"
                                  style={{
                                    position: "absolute",
                                    top: "25px",
                                    right: "25px",
                                  }}
                                >
                                  <Dropdown.Toggle
                                    variant="primary"
                                    className="dropdown-toggle-vertical"
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
                                </Dropdown>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex mb-3">
                                    <div className="mr-2">
                                      <a href="#!" className="text-dark">
                                        <img
                                          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
                                          alt="User"
                                          className="author-img"
                                        />
                                      </a>
                                    </div>
                                    <div>
                                      <h5 className="mb-0">
                                        <a href="#!" className="text-dark">
                                          <p>{post.firstname}</p>
                                        </a>
                                      </h5>
                                      <p className="mb-0 text-muted">
                                        {post.career}
                                      </p>
                                      {/* <p className="mb-0 text-muted">5m</p>             edit date */}
                                    </div>
                                  </div>
                                  <div className="post-block__user-options">
                                    <a
                                      href="#!"
                                      id="triggerId"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="triggerId"
                                    >
                                      < a
                                        className="dropdown-item text-dark"
                                        href="#!"
                                      >
                                        <i className="fa fa-pencil mr-1" />
                                        Edit
                                      </a>
                                      <a
                                        className="dropdown-item text-danger"
                                        href="#!"
                                      >
                                        <i className="fa fa-trash mr-1" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-block__content mb-2">
                                  <p
                                    style={{
                                      wordBreak: "break-word",
                                    }}
                                  >
                                    {post.paragraph_content}
                                    {/* <p>{props.postComment.content}</p> */}
                                  </p>
                                  <img
                                    src={post.photo_content}
                                    alt="Content img"
                                  />
                                  <p>{post.post_date}</p>
                                </div>
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-2">
                                    <div className="d-flex"></div>
                                  </div>
                                  <p className="mb-0"></p>
                                </div>
                                <hr />
                                <div className="post-block__comments">
                                  {/* Comment Input */}
                                  <div className="input-group mb-3">
                                    <div className="input-group-append"></div>
                                  </div>

                                  <div className="comment-view-box mb-3">
                                    <div > {/* here was the class name d-flex mb-2 */}
                                      <div >
                                        <Comment postID={post.post_id} />

                                        <div className="d-flex">
                                          <a
                                            href="#!"
                                            className="text-dark mr-2"
                                          >
                                            <span>
                                              <i className="fa fa-heart-o" />
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </>
                  );
                })}
              </div>
            </>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center p-4">
        <Container>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>

      <UpdatePost
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}
        postData={postData}
        posts={posts}
        takeDataFromChild={takeDataFromChild}
      
      />
      
      {/* <Comment comments={props.commentsDataArray} /> */}
    </div>
  );
}

export default HomePost;
