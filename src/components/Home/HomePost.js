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

function HomePost(props) {
  // console.log(props.comments);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  // console.log(posts);
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

  // console.log(readableDate); // Output: "Sat May 22 2023"
  // console.log(postData);
  ///////////////////////////////////////////

  const addPostODb = async () => {
    try {
      // e.preventDefault()
      const obj = {
        paragraph_content: postText,
        post_date: readableDate,
        // user_id: props
        photo_content: image,
      };
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
      const result = await axios.post(serverUrl, obj);
      // setPostText(result.data)
      props.takeDataFromChild(result.data);
      // console.log(result.data[0]);
      setPostData(result.data[0]);
      setPosts(result.data);
      // setPostText("");
      
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
    // props.takeDataFromFirstChild(arr)
  };

  

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
    const result = await axios.get(serverUrl);
    setPosts(result.data);
    // setPosts(props.postDataArray);
  };
  useEffect(() => {
    sendReq();
    // console.log(postDataArray)
  }, [posts]);

  // const handleAddComment = async (commentText) => {
  //   try {
  //     const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/2`;
  //     const obj = {
  //       user_id: 1,
  //       content: commentText
  //     };
  //     console.log(obj.content)
  //     const response = await axios.post(serverUrl, obj);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log('Error adding comment', error);
  //   }
  // };

  // console.log(props.comments);

  const handleDeletePost = async (post_id) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${post_id}`;
      await axios.delete(serverUrl);
      sendReq();
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
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
            {posts && (
              <div className="posts-container">
                {posts.map((post) => (
                  <Card key={post.post_id} className="post">
                    <Card.Body>
                      <Card.Text>{post.paragraph_content}</Card.Text>
                      <Card.Text>{post.photo_content}</Card.Text>
                      <Card.Text>{post.post_date}</Card.Text>
                      {/* {post.comments && (
                        <div className="comments-container">
                          {post.comments.map((comment) => (
                            <Card.Text key={comment.id} className="comment">
                              {comment.text}
                            </Card.Text>
                          ))}
                        </div>
                      )} */}
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          variant="primary"
                          id={`dropdown-${post.id}`}
                          className="dropdown-toggle-vertical"
                        >
                          Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEditPost(post)}>
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleDeletePost(post.post_id)}
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      {/* {setTimeout(() => { */}
                                              <Comment postID={post.post_id}/>

                      {/* }, 3)} */}

                      
                    {/* ///////////////////////////////////////////// */}


                    </Card.Body>
                  </Card>
                ))}
              </div>
            )}
          </Col>
          <Col md={4} className="people-section">
            <h3>People with the Same Career</h3>
            <div className="people-list">
              <p>Person 1</p>
              <p>Person 2</p>
              <p>Person 3</p>
              <p>Person 4</p>
              <p>Person 5</p>
              <p>Person 6</p>
              <p>Person 7</p>
              <p>Person 8</p>
              <p>Person 9</p>
              <p>Person 10</p>
            </div>
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
