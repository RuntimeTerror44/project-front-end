import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from './Comment';


function Test(){
    const [commentsDataArray, setCommentsDataArray] = useState([]);
    const getCommentsFromDb = async () => {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}comments`; 
      const result = await axios.get(serverUrl);
        setCommentsDataArray(result.data)
      }  
    useEffect(() => {
      getCommentsFromDb();
    },[]);
    return (
        <>
         {commentsDataArray.map((item, idx) => {  
                 <Row xs={1} md={4} className="g-4">   
                   <Col key={idx}>
                     <Card >
                       <Card.Img variant="top" />
                       <Card.Body>
                         <Card.Text>
                          <p>{item.comment_id}</p>
                          <p>{item.content}</p>
                          <p>{item.comment_date}</p>
                          <p>{item.user_id}</p>
                          <p>{item.post_id}</p>
                         </Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                 
               </Row>           
              })}
              <Comment/>

              <Comment item={commentsDataArray}/>
              </>
    )
}
export default Test;
