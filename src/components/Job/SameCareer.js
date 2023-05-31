import {
    Navbar,
    Nav,
    Modal,
    Container,
    Form,
    FormControl,
    Row,
    Col,
    Card,
    Dropdown,
  } from "react-bootstrap";
  
  import React, { useRef, useState, useEffect } from "react";
  import { useAuth0 } from "@auth0/auth0-react";
  import { Button, Space } from "antd";
  import axios from "axios";

function Req (props){

    const storedUserData = localStorage.getItem("userId");
    const userData = JSON.parse(storedUserData);

    const [JobPosts, setJobPosts] = useState([]);

    
const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}userssamecareer`;

    const obj = {
        career: userData[0].career
      };

      console.log(userData[0].career);

    const result = await axios.post(serverUrl,obj);
    setJobPosts(result.data);
    // setJobPosts(props.postDataArray);
  };
  useEffect(() => {
    sendReq();
    // console.log(postDataArray)
  }, [JobPosts]);


return (
    <div style={{marginLeft:"0px"}}>


                    {JobPosts.map((post) => {
              return (
                <>
                { (post.id != userData[0].id) && (
                  <div className="feeds" style={{marginLeft:"0px"}}>
                    {/* <HomePost/> */}
                    {/*--------------- FEED 1 ------------------*/}

                    <div style={{marginLeft:"0px"}} className="feed">
                      <div className="head">
                        <div className="user">
                          <div className="profile-photo" >
                            <img
                              src={post.profilepicture}
                              style={{marginLeft:"0px" ,width: "40px", height: "40px" }}
                            />
                          </div>
                          <div className="info" style={{marginBottom:"0px", gap:"0px"}}>
                            <p style={{marginBottom:"0px", gap:"0px"}}>
                              {post.firstname} {post.lastname}
                            </p>
                          </div>
                          <small>{post.career}</small>

                        </div>
                        
                      </div>
                      <div className="photo"></div>
                      <div className="action-buttons">
                        <div className="interaction-buttons"></div>
                        <div className="bookmark">
                          <span>
                            {/* <i className="uil uil-bookmark-full" /> */}
                          </span>
                        </div>
                      </div>
                      <div className="liked-by"></div>
                      <div className="caption">
                        <p>
                          <p
                            style={{
                              wordBreak: "break-word",
                              fontSize: "18px",
                              display: "flex",
                            }}
                            id="paragraphstyle"
                          >
                            
                          </p>
                        </p>

                       
                      </div>
                      <hr></hr>
                      <br></br>
                    </div>
                  </div>
                     ) }
                </>
              );
            })}
    </div>
)
}

export default Req


{/* <span > */}

                        {/* {post.user_id == userData[0].id && (
                          <Dropdown className="edit">
                            <Dropdown.Toggle
                              id="mm"
                              variant="primary"
                              className="dropdown-toggle-vertical"
                              // className="uil uil-ellipsis-h"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleEditPost(post)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDeletePost(post)}
                              >
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        )} */}
                        {/* </span> */}