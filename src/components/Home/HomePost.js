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
import "./HomePost.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdatePost from "./UpdatePost";
// import Comment from './Comment'

function HomePost(props) {
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
      console.log(result.data[0]);
      setPostData(result.data[0]);
      setPosts(result.data);
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
      return; // Skip empty posts
    }

    const newPost = {
      id: Date.now(),
      text: postText,
      comments: [],
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setPostText("");
  };
  console.log(posts);

  const handleEditPost = (post) => {
    setShowUpdateModal(true);
    setPostData(post);
  };
  const handleClosePost = () => {
    setShowUpdateModal(false);
  };

  const takeDataFromChild =(arr)=>{
    setPosts(arr)
    // props.takeDataFromFirstChild(arr)
  }

  const sendReq= async ()=>{
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts`;
    const result = await axios.get(serverUrl);
    setPosts(result.data);
    // setPosts(props.postDataArray);
  }
  useEffect(()=>{
    sendReq();
    // console.log(postDataArray)
  },[])



  // ...
  
  const handleAddComment = async (postId, commentText) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}/comments/${postId}`;
      const obj = {
        content: commentText,
      };
      const response = await axios.post(serverUrl, obj);
      console.log(response.data);
    } catch (error) {
      console.log('Error adding comment', error);
    }
  };
  
  
  
  
  const handleDeletePost = async (postId) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}posts/${postId}`;
      await axios.delete(serverUrl);
      sendReq(); 
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };
  return (
    <div>
      <Navbar className="navbar-light bg-light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">My website</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HomePost</Nav.Link>
              <Nav.Link href="#jobs">Profile</Nav.Link>
              <Nav.Link href="#jobs">Jobs</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
                onClick={addPostODb}
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
                      {post.comments && (
                        <div className="comments-container">
                          {post.comments.map((comment) => (
                            <Card.Text key={comment.id} className="comment">
                              {comment.text}
                            </Card.Text>
                          ))}
                        </div>
                      )}

                      <Form
                        onSubmit={(event) => {
                          event.preventDefault();
                          handleAddComment(post.id, event.target.comment.value);
                          event.target.comment.value = "";
                        }}
                      >
                        <Form.Group controlId={`commentForm-${post.id}`}>
                          <Form.Control
                            type="text"
                            name="comment"
                            placeholder="Add a comment"
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Add Comment
                        </Button>
                      </Form>
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
      {/* <Comment posts={posts}/> */}
    </div>
  );
}

export default HomePost;
