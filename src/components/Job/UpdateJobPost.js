import {useState, useEffect ,useRef} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import axios from 'axios';

function UpdateJobPost(props){

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
const handleUpdatePost= async(e)=>{
    e.preventDefault()
    const obj={
      job_post_content: changePost

    }
    console.log(obj)
console.log(obj.job_post_content)
    const serverUrl=`${process.env.REACT_APP_SERVER_URL}job/${props.postData.ID}`
    console.log(serverUrl)
    const result= await axios.put(serverUrl, obj)
    console.log(result.data)
    props.takeDataFromChild(result.data)
    props.handleClosePost()
}
 const serverUrl=`${process.env.REACT_APP_SERVER_URL}job/${props.postData.ID}`
 console.log(serverUrl)


//////////////////////////////////////////////////////////
  
    return(
        <>

    {/* {console.log(props.postData.job_post_content)} */}
        <Modal show={props.showUpdateModal} onHide={props.handleClosePost}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* onChange={(e) => setComments(e.target.value)} */}
        <form >
          <input  defaultValue={props.postData.job_post_content} type="text"  name='post' onChange={handleChange} ref={dateInputRef} />
          <Button onClick={handleUpdatePost} type='submit' variant="primary">Update</Button>
        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClosePost}>Cancel</Button>
          {/* <Button variant="primary" onClick={(e)=>handleUpdateComments(e)}>Update</Button> */}
        </Modal.Footer>
      </Modal>
        </>
    )
    };
export default UpdateJobPost;