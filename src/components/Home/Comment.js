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
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [commentsDataArray, setCommentsDataArray] = useState([]);
  const getCommentsFromDb = async () => {
    console.log(props.postID);
    if (props.postID){
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/${props.postID}`;
      const result = await axios.get(serverUrl);
      setCommentsDataArray(result.data);
    }

   
  };

  useEffect(() => {
    getCommentsFromDb();
    // console.log(commentsDataArray);
  }, [commentsDataArray]);

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
        user_id: 2,
        content: e.target.comment.value,
      };
      const response = await axios.post(serverUrl, obj);
      // console.log(response.data);

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
    <div>

                   
      
      {commentsDataArray.map((item) => {
        const text = (
          <>
         
                        
          <Row xs={1} md={1} className="g-4">
            <Col>
              {/* <Card> */}
                {/* {setPostID(post.post_id)} */}
                {/* <Card.Img variant="top" /> */}
                <Text>

<img
         src="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg"
         alt="User img"
         className="author-img author-img--small mr-2"

       />
       <h6 className="mb-1">
                <a href="#!" className="text-dark">
                  {/* John doe local storage  */}
                </a>{" "}
                <p className="mb-0 text-muted" id="hello">SoftwreEngineer</p>   {/* John doe local storage  */}

              
              </h6>
              <>{item.content}</>
              <hr id="meme"></hr>
              </Text>

                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="primary"
                    // id={`dropdown-${post.id}`}
                    className="dropdown-toggle-vertical"
                  >
                    Options
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                    onClick={() => handleEditPost(item)}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item

                    onClick={() => handleDeletePost(item.comment_id)}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              {/* </Card> */}
            </Col>
          </Row>
          </>
        );
        return text;
      })}



      <Form onSubmit={handleAddComment}>
        <Form.Group>
          <Form.Control
            type="text"
            name="comment"
            placeholder="Add a comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add a Comment
        </Button>
      </Form>

      <UpdateComment
        showUpdateModal={showUpdateModal}
        handleClosePost={handleClosePost}   ///done
        postData={postData}
        posts={commentsDataArray}
        takeDataFromChild={takeDataFromChild}
        postID={props.postID}
      />
    </div>
  );
}
export default Comment;
