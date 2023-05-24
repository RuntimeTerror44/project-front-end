import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";



function Comment(props){
    const [commentsDataArray, setCommentsDataArray] = useState([]);

    const getCommentsFromDb = async () => {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/52`; 
      const result = await axios.get(serverUrl);
        setCommentsDataArray(result.data)
    //  console.log(commentsDataArray);
      }
    
    // console.log(commentsDataArray);


    useEffect(() => {
      getCommentsFromDb();
      console.log(commentsDataArray);
    },[]);

    useEffect(() => {
      },[commentsDataArray]);
    
    const handleAddComment = async (e) => {
        try {
        e.preventDefault();
          const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments/52`;
          const obj = {
            user_id: 2,
            content: e.target.comment.value
          };
          const response = await axios.post(serverUrl, obj);
          console.log(response.data);

          setCommentsDataArray(response.data);
        //   console.log(commentsDataArray);
        } catch (error) {
          console.log('Error adding comment', error);
        }
      };
      return (
        <div>
          <Form
                onSubmit= {handleAddComment}>
                    <Form.Group >
                    <Form.Control
                      type="text"
                      name="comment"
                      placeholder="Add a comment"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add a Comment
                  </Button>
                  </Form>
                  {/* {console.log(commentsDataArray)} */}
                {commentsDataArray.map((item) => {  
                    const text = (<Row xs={1} md={4} className="g-4">   
                    <Col>
                      <Card >
                        <Card.Img variant="top" />
                        <Card.Body>
                          <Card.Text>
                           <p>knjnjbhbhb</p>
                           <p>{item.content}</p>
                           <p>{item.comment_date}</p>
                           <p>{item.user_id}</p>
                           <p>{item.post_id}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>)  
                return text;            
              })}
              
        </div>
      );
    };
    export default Comment;