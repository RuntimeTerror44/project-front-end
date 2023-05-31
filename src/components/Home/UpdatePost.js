import {useState, useEffect ,useRef} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import axios from 'axios';



function UpdatePost(props){

  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);

    //////////////////// backend post update is not ready yet ////////////
  // console.log(props.postData)

    // const handleUpdateComments = async (e) => {
    //     e.preventDefault()
    //     console.log(e.target.comment.value);
    //     await axios.put(
    //       `${process.env.REACT_APP_SERVER_URL}/update/`,
    //     //   { comments:e.target.comment.value }
    //     );
    //     handleCloseUpdateModal();
    //   };
/////////////////////////Update post/////////////////////////////////
const [changePost, setChangePost] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setChangePost(e.target.value);
  };

  const [changePhoto, setChangePhoto] = useState("");
  const dateInputphotoRef = useRef(null);
  const handlePhotoChange = (e) => {
    setChangePhoto(e.target.value);
  };

const handleUpdatePost= async(e)=>{
    e.preventDefault()
    const obj={
        paragraph_content: changePost,
        photo_content: changePhoto,
        user_id: userData[0].id /////////////////////////////////////////////////

    }
    console.log(obj)
    console.log(obj.paragraph_content)
    const serverUrl=`${process.env.REACT_APP_SERVER_URL}posts/${props.postData.post_id}`
    console.log(serverUrl)
    const result= await axios.put(serverUrl, obj)
    console.log(result.data)
    props.takeDataFromChild(result.data)
    props.handleClosePost()
}
//  const serverUrl=`${process.env.REACT_APP_SERVER_URL}posts/${props.postData.post_id}`
//  console.log(serverUrl)


//////////////////////////////////////////////////////////
  
    return(
        <>
    {/* {console.log(props.postData.paragraph_content)} */}
        <Modal show={props.showUpdateModal} onHide={props.handleClosePost}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* onChange={(e) => setComments(e.target.value)} */}
        <form style={{display:"grid" ,gridTemplateRows:"auto auto", gap:"10px"}}>

        <input style={{borderWidth:'1px',width:'450px',borderRadius:"20px"}} defaultValue={props.postData.paragraph_content} type="text"  name='post' onChange={handleChange} ref={dateInputRef} />
          
          <input  style={{borderWidth:'1px',width:'450px',borderRadius:"20px"}} defaultValue={props.postData.photo_content} type="text"  name='post' onChange={handlePhotoChange} ref={dateInputphotoRef} />

        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdatePost} type='submit' variant="primary" style={{display:"inline-flex",justifyContent:"start",marginRight:"150px"}}>Update</Button>

          <Button style={{justifyContent:"start" }}  variant="secondary" onClick={props.handleClosePost}>Cancel</Button>
          {/* <Button variant="primary" onClick={(e)=>handleUpdateComments(e)}>Update</Button> */}
        </Modal.Footer>
      </Modal>
        </>
    )
    };
export default UpdatePost;