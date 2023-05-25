import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Card.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileCard = (props) => {
  const [jobs, setJobs] = useState([]);

  const sendReq = async () => {
    const serverUrl = "http://localhost:4000/getcomments";
    const response = await axios.get(serverUrl);
    setJobs(response.data);
  };

  useEffect(() => {
    sendReq();
  }, []);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: comments.length + 1,
      content: comment,
    };
    setComments([...comments, newComment]);
    setComment("");
  };

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
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <section className="main-content">
        <div className="container">
          <h1 className="text-center text-uppercase"></h1>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="post-block">
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
                      <p className="mb-0 text-muted">SoftwreEngineer</p>
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
                    >
  
          <p></p>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item text-dark" href="#!">
                        <i className="fa fa-pencil mr-1" />
                        Edit
                      </a>
                      <a className="dropdown-item text-danger" href="#!">
                        <i className="fa fa-trash mr-1" />
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-block__content mb-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione laboriosam non atque, porro cupiditate commodi?
                    Provident culpa vel sit enim!
                  </p>
                  <img src="" alt="Content img" />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex">
                    
                    </div>
                  
                  </div>
                  <p className="mb-0">
                   
                  
                  </p>
                </div>
                <hr />
                <div className="post-block__comments">
                  {/* Comment Input */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add your comment"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                  {/* Comment content */}
                  <div className="comment-view-box mb-3">
                    <div className="d-flex mb-2">
                      <img
                        src="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg"
                        alt="User img"
                        className="author-img author-img--small mr-2"
                      />
                      <div>
                        <h6 className="mb-1">
                          <a href="#!" className="text-dark">
                            John doe
                          </a>{" "}
                          <p className="mb-0 text-muted" id="hello">SoftwreEngineer</p>
                          <small className="text-muted">1m</small>
                        </h6>
                        <p className="mb-1"></p>
                    {jobs.map((job) => (
                    <Text>
                   <img
                   src="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg"
                   alt="User img"
                   className="author-img author-img--small mr-2"

                 />
                 <h6 className="mb-1">
                          <a href="#!" className="text-dark">
                            John doe
                          </a>{" "}
                          <p className="mb-0 text-muted" id="hello">SoftwreEngineer</p>
                        
                        </h6>
                        <>{job.content}</>
                        <hr id="meme"></hr>
                        </Text>
                        
                    ))}
                        
                        <div className="d-flex">
                          <a href="#!" className="text-dark mr-2">
                            <span>
                              <i className="fa fa-heart-o" />
                            </span>
                          </a>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More Comments */}
              
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="" style={{ backgroundColor: "" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="13" lg="14" xl="10" className="mt-5">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex flex-row mb-3">
                    <div className="text-black">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          style={{
                            width: "100px",
                            borderRadius: "100px",
                            marginTop: "5px",
                          }}
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                          alt="Generic placeholder image"
                          fluid
                        />
                      </div>
                      <div className="flex-grow-3 ms-3">
                        <MDBCardTitle></MDBCardTitle>
                        <MDBCardText></MDBCardText>
                        <div
                          className="wrapped-text justify-content-start  rounded-3 p-2 mb-2"
                          style={{
                            backgroundColor: "#efefef",
                            marginTop: "30px",
                          }}
                        >
                          {/* <p>{props.postData.paragraph_content}</p> */}
                          <p>
                            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                          </p>
                          {/* <MDBBtn outline className="me-50 flex-grow-10">
                          Like
                        </MDBBtn> */}
                        </div>
                      </div>
                      <div className="d-flex pt-15">
                        <MDBBtn outline className="me-10 flex-grow-4">
                          Like
                        </MDBBtn>
                      </div>
                      <br />
                    </div>
                  </div>
                  <div
                    className=" justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef", marginTop: "10px" }}
                  >
                    {jobs.map((job) => (
                      <div key={job.id}>
                        <p>{job.content}</p>
                        <br></br>
                        <hr></hr>
                      </div>
                    ))}
                    <p>
                      add this
                      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh{" "}
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default ProfileCard;

// {jobs.map((job) => (
//   <div key={job.id}>
//     <p>{job.content}</p>
//     <br></br><hr></hr>
//   </div>
// ))}

// const [comments, setComments] = useState([]);

// const handleAddComment = (comment) => {
//   setComments([...comments, comment]);
// };

// return (
//   // <div className="post">
//   //   <div className="post-owner">
//   //     <img className="post-owner-picture" src={post.owner.picture} alt={post.owner.name} />
//   //     <h3 className="post-owner-name">{post.owner.name}</h3>
//   //   </div>
//   //   <div className="post-content">
//   //     <h2 className="post-title">{post.title}</h2>
//   //     <p className="post-description">{post.description}</p>
//   //   </div>
//   //   <div className="comments-section">
//   //     <h4 className="comments-heading">Comments</h4>
//   //     <div className="comment-list">
//   //       {comments.map((comment) => (
//   //         <Comment key={comment.id} comment={comment} />
//   //       ))}
//   //     </div>
//   //     <form className="comment-form" onSubmit={handleAddComment}>
//   //       <input type="text" placeholder="Add a comment" />
//   //       <button type="submit">Post Comment</button>
//   //     </form>
//   //   </div>
//   // </div>
// );
// };
//   const [comments1, setComments1] = useState([]);
//   const [flag, setFlag] = useState(false);
//   const sendReq = async () => {
//     const serverUrl2 = `http://localhost:4000/getcomments`;
//     const result2 = await axios.get(serverUrl2);
//     setComments(result2.data);
//   };
//   useEffect(() => {
//     sendReq();
//   }, []);

//   const handleShow = () => {
//     setFlag(true);
//   };
//   const handleClose = () => {
//     setFlag(false);
//   };

//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleCommentSubmit = (event) => {
//     event.preventDefault();
//     const newComment = {
//       id: comments.length + 1,
//       content: comment,
//     };
//     setComments([...comments, newComment]);
//     setComment("");
//   };

//   return (
//     <>
//       <div className="" style={{ backgroundColor: "" }}>
//         <MDBContainer>
//           <MDBRow className="justify-content-center">
//             <MDBCol md="13" lg="14" xl="10" className="mt-5">
//               <MDBCard style={{ borderRadius: "15px" }}>
//                 <MDBCardBody className="p-4">
//                   <div className="d-flex text-black">
//                     <div className="flex-shrink-0">
//                       <MDBCardImage
//                         style={{ width: "180px", borderRadius: "10px" }}
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
//                         alt="Generic placeholder image"
//                         fluid
//                       />
//                     </div>
//                     <div className="flex-grow-1 ms-3">
//                       <MDBCardTitle></MDBCardTitle>
//                       <MDBCardText></MDBCardText>
//                       <div
//                         className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                         style={{ backgroundColor: "#efefef" }}
//                       ></div>

//                       <div className="d-flex pt-1">
//                         <MDBBtn outline className="me-1 flex-grow-1">
//                           Like
//                         </MDBBtn>
//                         {/* <MDBBtn className="flex-grow-1" type submit>Comment</MDBBtn> */}
//                       </div>
//                       <br />
//                       <form onSubmit={handleCommentSubmit}>
//                         {/* <input
//                           type="text"
//                           placeholder="Add Comment Here"
//                           value={comment}
//                           onChange={handleCommentChange}
//                         /> */}
//                         {/* <button type="submit" className="flex-grow-1">Comment</button> */}
//                         <MDBBtn
//                           className="flex-grow-1"
//                           type="submit"
//                           onClick={handleShow}
//                         >
//                           Comment
//                         </MDBBtn>
//                       </form>
//                     </div>
//                   </div>
//                   <div
//                     className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                     style={{ backgroundColor: "#efefef" }}
//                   >
//                     {comments.map((comment) => (
//                       <p key={comment.id}>{comment.content}</p>
//                     ))}
//                   </div>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </div>
//       <Modalcomments showFlag={flag} handleclose={handleClose} />
//     </>
//   );
// };
