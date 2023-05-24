import React, { useState ,useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileCard = (props) => {

  const [jobs, setJobs] = useState([]);

  const sendReq = async () => {
    const serverUrl = 'http://localhost:4000/getcomments';
    const response = await axios.get(serverUrl);
    setJobs(response.data);
  };
  
  useEffect(() => {
    sendReq();
  }, []);
  
  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

 






  const [comment, setComment] = useState('');
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
    setComment('');
  };

 

  return (
    <>
      <div className="" style={{ backgroundColor: '' }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="13" lg="14" xl="10" className="mt-5">
              <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: '180px', borderRadius: '100px' , marginTop:"5px"}}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle></MDBCardTitle>
                      <MDBCardText></MDBCardText>
                      <div
                        className="d-flex justify-content-start rounded-7 p-10 mb-1"
                        style={{ backgroundColor: '#efefef' ,padding: "50px",marginTop:"25px"}}
                      >
                        <p>{props.postData.paragraph_content}</p>
                        {/* <MDBBtn outline className="me-50 flex-grow-10">
                          Like
                        </MDBBtn> */}
                      </div>
                      <div className="d-flex pt-1">
                        <MDBBtn outline className="me-10 flex-grow-4">
                          Like
                        </MDBBtn>
                      </div>
                      <br />
                    </div>
                  </div>
                  <div
                        className=" justify-content-start rounded-3 p-2 mb-2" 
                        style={{ backgroundColor: '#efefef', marginTop: "10px" }}
                      >
                        {jobs.map((job) => (
  <div key={job.id}>
    <p>{job.content}</p>
    <br></br><hr></hr>
  </div>
))}
<p>add this ,,,,,</p>
                      
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


