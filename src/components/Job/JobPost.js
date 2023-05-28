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
import JobComment from "./JobComment";

function JobPost(props) {
  const [postText, setPostText] = useState("");
  const [postCity, setPostCity] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobField, setjobField] = useState("");
  const [JobPosts, setJobPosts] = useState([]);
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

  const addPostODb = async () => {
    try {
      // e.preventDefault()
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
      setJobPosts(result.data);
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

  const handlePostSubmit = (event) => {
    event.preventDefault();

    if (postText.trim() === "") {
      return; // Skip empty JobPosts
    }

    const newPost = {
      id: Date.now(),
      text: postText,
      comments: [],
    };
    addPostODb()
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
    setPostText("")
    // setJobPosts(props.postDataArray);
  };
  useEffect(() => {
    sendReq();
    // console.log(postDataArray)
  }, [JobPost]);

  // const handleDeletePost = (postId) => {
  //   // Handle delete functionality here
  //   console.log(`Delete post with id: ${postId}`);
  // };

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

  const handleDeletePost = async (id) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}job/${id}`;
      await axios.delete(serverUrl);
      sendReq();
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };

console.log(postData)
  return (
    // <div>
      
      
      
    //   <Container>
    //     <Row>
    //       <Col>
    //         <h1>Share your thoughts here</h1>
    //         {/* onSubmit={handlePostSubmit} this is in form */}
    //         <Form onSubmit={handlePostSubmit}>
    //           <Form.Group controlId="postForm">
    //             <Form.Control
    //               as="textarea"
    //               rows={3}
    //               placeholder="What's on your mind?"
                 
            
    //               onChange={handlePostChange}
    //             />
    //             <Form.Control
    //               as="textarea"
    //               rows={1}
    //               placeholder="Enter city name"
    //               onChange={handlePostCity}
    //             />
    //             <Form.Control
    //               as="textarea"
    //               rows={1}
    //               placeholder="Enter Job Title"
    //               onChange={handleJobTitle}
    //             />
    //             <Form.Control
    //               as="textarea"
    //               rows={1}
    //               placeholder="Enter Job Field"
    //               onChange={handleJobField}
    //             />

    //             {/* <Form.Group controlId="formFile" className="mb-3">
    //               <Form.Control
    //                 name="profile_picture"
    //                 type="file"
    //                 // onChange={handleChange}
    //                 // ref={dateInputRef}
    //               />
    //             </Form.Group> */}
    //           </Form.Group>
    //           <Button
    //             onClick={handlePostSubmit}
    //             className="btnpost"
    //             variant="primary"
    //             type="submit"
    //           >
    //             Post
    //           </Button>
    //         </Form>

    //         {/* profilePicture: e.target.profile_picture.value, */}
    //         <hr />
    //         {JobPosts && (
    //           <div className="postsosts-container">
    //             {JobPosts.map((post) => (
    //               <Card key={post.id} className="post">
    //                 <Card.Body>
    //                   <Card.Text >{post.job_post_content}</Card.Text>
    //                   <Card.Text>{post.job_title}</Card.Text>
    //                   <Card.Text>{post.job_field}</Card.Text>
    //                   <Card.Text>{post.city}</Card.Text>
    //                   {post.comments && (
    //                     <div className="comments-container">
    //                       {post.comments.map((comment) => (
    //                         <Card.Text key={comment.id} className="comment">
    //                           {comment.text}
    //                         </Card.Text>
    //                       ))}
    //                     </div>
    //                   )}

    //                   <Form
    //                     onSubmit={(event) => {
    //                       event.preventDefault();
    //                       handleAddComment(post.id, event.target.comment.value);
    //                       event.target.comment.value = "";
    //                     }}
    //                   >
    //                     <Form.Group controlId={`commentForm-${post.id}`}>
    //                       <Form.Control
    //                         type="text"
    //                         name="comment"
    //                         placeholder="Add a comment"
    //                       />
    //                     </Form.Group>
    //                     <Button variant="primary" type="submit">
    //                       Add Comment
    //                     </Button>
    //                   </Form>
    //                   <Dropdown align="end">
    //                     <Dropdown.Toggle
    //                       variant="primary"
    //                       id={`dropdown-${post.id}`}
    //                       className="dropdown-toggle-vertical"
    //                     >
    //                       Options
    //                     </Dropdown.Toggle>
    //                     <Dropdown.Menu>
    //                       <Dropdown.Item onClick={() => handleEditPost(post)}>
    //                         Edit
    //                       </Dropdown.Item>
    //                       <Dropdown.Item
    //                         onClick={() => handleDeletePost(post.id)}
    //                       >
    //                         Delete
    //                       </Dropdown.Item>
    //                     </Dropdown.Menu>
    //                   </Dropdown>
    //                 </Card.Body>
    //               </Card>
    //             ))}
    //           </div>
    //         )}
    //       </Col>
    //     </Row>
    //   </Container>
    //   <footer className="bg-dark text-white text-center p-4">
    //     <Container>
    //       <p>&copy; 2023 My Website. All rights reserved.</p>
    //     </Container>
    //   </footer>

    //   <UpdateJobPost
    //     showUpdateModal={showUpdateModal}
    //     handleClosePost={handleClosePost}
    //     postData={postData}
    //     JobPosts={JobPosts}
    //     takeDataFromChild={takeDataFromChild}
    //   />
    //   {/* <Comment JobPosts={JobPosts}/> */}
    // </div>
  
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
                  as="textarea"
                  rows={1}
                  placeholder="Enter city name"
                  onChange={handlePostCity}
                />
              </Form.Group>
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
            <div className="posts-container">
              {JobPosts.map((post) => {
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
                              style={{ position: "relative" }}
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
                                      handleDeletePost(post.id)
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
                                        Kiran Acharya
                                      </a>
                                    </h5>
                                    <p className="mb-0 text-muted">
                                      SoftwreEngineer
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
                                  {post.job_post_content}
                                  {/* <p>{props.postComment.content}</p> */}
                                </p>
                                <p>
                                  {post.job_title}
                                
                                </p>
                                <p>{post.job_field}</p>
                                <p>{post.city}</p>
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
                                      <JobComment postID={post.ID} />

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

    {/* <UpdatePost
      showUpdateModal={showUpdateModal}
      handleClosePost={handleClosePost}
      postData={postData}
      posts={posts}
      takeDataFromChild={takeDataFromChild}
    /> */}
       <UpdateJobPost
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}
        postData={postData}
        JobPosts={JobPosts}
        takeDataFromChild={takeDataFromChild}
      />
    {/* <Comment comments={props.commentsDataArray} /> */}
  </div>
    );
}

export default JobPost;
