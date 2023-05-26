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
import "./JobPost.css";
import axios from "axios";
import { post } from "jquery";
import { useRef } from "react";
import UpdateJobPost from "./UpdateJobPost";
// import Comment from './Comment'

function JobPost(props) {
  const [postText, setPostText] = useState("");
  const [postCity, setPostCity] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobField, setjobField] = useState("");
  const [JobPosts, setPosts] = useState([]);
  // console.log(JobPosts);
  // const [image, setImage] = useState("");
  // const [comment, setComment] = useState("");
  const [postData, setPostData] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const dateInputRef = useRef(null);
  // const handleChange = (e) => {
    // setImage(e.target.value);
  // };
  const currentDate = new Date();
  const readableDate = currentDate.toDateString();


  ///////////////////////////////////////////

  const addPostODb = async (e) => {
    try {
      e.preventDefault()
      const obj = {
        job_post_content: postText,
        job_title: jobTitle,
        job_field:jobField,
        city:postCity
        // post_date: readableDate,
        // user_id: props
        // photo_content: image,
      };
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}job`;
      const result = await axios.post(serverUrl, obj);
      // setPostText(result.data)
      console.log(result.data[0]);
      setPostData(result.data[0]);
      setPosts(result.data);
      setPostText("")
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

  // const handlePostSubmit = (event) => {
  //   event.preventDefault();

  //   if (postText.trim() === "") {
  //     return; // Skip empty JobPosts
  //   }

  //   const newPost = {
  //     id: Date.now(),
  //     text: postText,
  //     comments: [],
  //   };

  //   setPosts((prevPosts) => [newPost, ...prevPosts]);
  //   setPostText("");
  // };
  console.log(JobPosts);

  const handleEditPost = (post) => {
    setShowUpdateModal(true);
    setPostData(post);
  };
  const handleClosePost = () => {
    setShowUpdateModal(false);
  };

  const takeDataFromChild = (arr) => {
    setPosts(arr);
    // props.takeDataFromFirstChild(arr)
  };

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}job`;
    const result = await axios.get(serverUrl);
    setPosts(result.data);
    setPostText("")
    // setPosts(props.postDataArray);
  };
  useEffect(() => {
    sendReq();
    // console.log(postDataArray)
  }, []);

  // const handleDeletePost = (postId) => {
  //   // Handle delete functionality here
  //   console.log(`Delete post with id: ${postId}`);
  // };

  // const handleAddComment = (postId, commentText) => {
  //   const newComment = {
  //     id: Date.now(),
  //     text: commentText,
  //   };

  //   setPosts((prevPosts) => {
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
console.log(postData)

const handleDeletePost = async (id) => {
  try {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}job/${id}`;
    await axios.delete(serverUrl);
    sendReq();
  } catch (error) {
    console.log(`error deleting job post ${error}`);
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
              <Nav.Link href="#home">JobPost</Nav.Link>
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
            {/* onSubmit={handlePostSubmit} this is in form */}
            <Form >
              <Form.Group controlId="postForm">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's on your mind?"
                 
            
                  onChange={handlePostChange}
                />
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter city name"
                  onChange={handlePostCity}
                />
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter Job Title"
                  onChange={handleJobTitle}
                />
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter Job Field"
                  onChange={handleJobField}
                />

                {/* <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    name="profile_picture"
                    type="file"
                    // onChange={handleChange}
                    // ref={dateInputRef}
                  />
                </Form.Group> */}
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
            {JobPosts && (
              <div className="postsosts-container">
                {JobPosts.map((post) => (
                  <Card key={post.id} className="post">
                    <Card.Body>
                      <Card.Text >{post.job_post_content}</Card.Text>
                      <Card.Text>{post.job_title}</Card.Text>
                      <Card.Text>{post.job_field}</Card.Text>
                      <Card.Text>{post.city}</Card.Text>
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
                            onClick={() => handleDeletePost(post.id)}
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

      <UpdateJobPost
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}
        postData={postData}
        JobPosts={JobPosts}
        takeDataFromChild={takeDataFromChild}
      />
      {/* <Comment JobPosts={JobPosts}/> */}
    </div>
  );
}

export default JobPost;
