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
import axios from "axios";
import { useRef } from "react";
import UpdateComment from "./UpdateComment";

import { Text } from "@chakra-ui/react";

function Comment(props) {
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [commentsDataArray, setCommentsDataArray] = useState([]);
  const getCommentsFromDb = async () => {
    // console.log(props.postID);
    if (props.postID) {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/${props.postID}`;
      const result = await axios.get(serverUrl);
      setCommentsDataArray(result.data);
      console.log(result.data);
    }
  };

  useEffect(() => {
    getCommentsFromDb();
    // console.log(commentsDataArray);
  }, []);

  // useEffect(() => {}, [commentsDataArray]);
  //------///////////////////////////////////////////////////////////////////////////////////////////////////
  const handleAddComment = async (e) => {
    try {
      e.preventDefault();
      const commentContent = e.target.comment.value.trim(); // Trim the comment content to remove leading/trailing spaces

      if (commentContent === "") {
        // Check if the comment is empty
        return; // Don't add an empty comment
      }
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/${props.postID}`;
      const obj = {
        user_id: userData[0].id,
        content: e.target.comment.value,
      };
      const response = await axios.post(serverUrl, obj);
      console.log(response.data);

      setCommentsDataArray(response.data);
      //   console.log(commentsDataArray);
    } catch (error) {
      console.log("Error adding comment", error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // const [date, setDate] = useState("");
  // const dateInputRef = useRef(null);
  // const handleChange = (e) => {
  //   setDate(e.target.value);}

  const handleDeletePost = async (comment_id) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/${comment_id}`;
      await axios.delete(serverUrl);
      // console.log(comment_id)
      getCommentsFromDb();
    } catch (error) {
      console.log(`error deleting post ${error}`);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleEditPost = (item) => {
    setShowUpdateModal(true);
    setPostData(item);
    // console.log(item)
  };
  const handleClosePost = () => {
    setShowUpdateModal(false);
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [postData, setPostData] = useState({});

  const takeDataFromChild = (arr) => {
    setCommentsDataArray(arr);
  };

  return (
    <div style={{width:"100%",position:"relative"}}>
            {/* {console.log(commentsDataArray)}; */}

      {commentsDataArray.map((item) => {
        const text = (
          <>
            <Row xs={1} md={1} className="g-4">
              <Col >
                {/* <Card> */}
                {/* {setPostID(post.post_id)} */}
                {/* <Card.Img variant="top" /> */}
                <Text>
                  {/* <img
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg"
                    alt="User img"
                    className="author-img author-img--small mr-2"
                  />
                  <h6 className="mb-1">
                    <a href="#!" className="text-dark">
                      {/* John doe local storage  */}
                   {/*} </a>{" "}
                    <p className="mb-0 text-muted" id="hello">
                      SoftwreEngineer
                    </p>{" "}
                    {/* John doe local storage  */}
                  {/*</h6> */}

                  {/* ========================================= */}
                  <div className="d-flex justify-content-between">
                                  <div className="d-flex mb-3">
                                    <div className="mr-2">
                                      <a href="#!" className="text-name">
                                        <img
                                        style={{width:"35px", height:"35px"}}
                                          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
                                          alt="User"
                                          className="author-img"
                                        />
                                      </a>
                                    </div>
                                    <div>
                                      <h5 className="mb-0">
                                        <a href="#!" style={{fontSize:"smaller"}} className="text-dark">
                                          <p>{item.firstname}</p>
                                        </a>
                                      </h5>
                                      <p style={{fontSize:"smaller"}} className="mb-0 text-muted">
                                      {item.career}
                                      </p>
                                      {/* <p className="mb-0 text-muted">5m</p>             edit date */}
                                    </div>
                                  </div>
                                  </div>
                  {/* ========================================= */}
                  <p
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    {item.content}
                  </p>{" "}
                  <Dropdown
                    align="end"
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "16px",
                    }}
                  >
                    <Dropdown.Toggle
                      variant="primary"
                      className="dropdown-toggle-vertical"
                    >
                     
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEditPost(item)}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeletePost(item.comment_id)}
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Text>

                {/* </Card> */}
              </Col>
        
            </Row>
          </>
        );
        return text;
      })}{" "}
      <Form onSubmit={handleAddComment}>
        <Form.Group
          style={{
            display: "flex "
          }}
        >
          <Form.Control
            type="text"
            name="comment"
            placeholder="Add a comment"
          />
          <Button variant="primary" type="submit">
            <i className="fa fa-paper-plane" />
          </Button>
        </Form.Group>
      </Form>
      <UpdateComment
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost} ///done
        postData={postData}
        posts={commentsDataArray}
        takeDataFromChild={takeDataFromChild}
        postID={props.postID}
      />
    </div>
  );
}
export default Comment;


