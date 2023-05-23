import React, { useState, useEffect } from "react";
import axios from "axios";
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

import Modalcomments from "./Modalcomments";

const ProfileCard = (props) => {
  const [comments1, setComments1] = useState([]);
  const [flag, setFlag] = useState(false);
  const sendReq = async () => {
    const serverUrl2 = `http://localhost:4000/getcomments`;
    const result2 = await axios.get(serverUrl2);
    setComments(result2.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  const handleShow = () => {
    setFlag(true);
  };
  const handleClose = () => {
    setFlag(false);
  };

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
      <div className="" style={{ backgroundColor: "" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="13" lg="14" xl="10" className="mt-5">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle></MDBCardTitle>
                      <MDBCardText></MDBCardText>
                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      ></div>

                      <div className="d-flex pt-1">
                        <MDBBtn outline className="me-1 flex-grow-1">
                          Like
                        </MDBBtn>
                        {/* <MDBBtn className="flex-grow-1" type submit>Comment</MDBBtn> */}
                      </div>
                      <br />
                      <form onSubmit={handleCommentSubmit}>
                        {/* <input
                          type="text"
                          placeholder="Add Comment Here"
                          value={comment}
                          onChange={handleCommentChange}
                        /> */}
                        {/* <button type="submit" className="flex-grow-1">Comment</button> */}
                        <MDBBtn
                          className="flex-grow-1"
                          type="submit"
                          onClick={handleShow}
                        >
                          Comment
                        </MDBBtn>
                      </form>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    {comments.map((comment) => (
                      <p key={comment.id}>{comment.content}</p>
                    ))}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Modalcomments showFlag={flag} handleclose={handleClose} />
    </>
  );
};

export default ProfileCard;
