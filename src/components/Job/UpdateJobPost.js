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
// const [changePost, setChangePost] = useState("");
//   const dateInputRef = useRef(null);

//   const handleChange = (e) => {
//     setChangePost(e.target.value);
//   };
  // const handleCityChange = (e) => {
  //   setChangePost(e.target.value);
  // };
  // const handleFieldChange = (e) => {
  //   setChangePost(e.target.value);
  // };
  // const handleTitleChange = (e) => {
  //   setChangePost(e.target.value);
  // };
const handleUpdatePost= async(e)=>{
    e.preventDefault()
    const obj={
      job_post_content: e.target.post.value,
      city: e.target.city.value,
      job_field:e.target.field.value,
      job_title:e.target.title.value

    }
    console.log(obj)
console.log(obj.job_post_content)
    const serverUrl=`${process.env.REACT_APP_SERVER_URL}job/${props.postData.id}`
    console.log(serverUrl)
    const result= await axios.put(serverUrl, obj)
    console.log(result.data)
    props.takeDataFromChild(result.data)
    props.handleClosePost()
}
 const serverUrl=`${process.env.REACT_APP_SERVER_URL}job/${props.postData.id}`
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
        {/* <form > */}
          {/* <input  defaultValue={props.postData.job_post_content} type="text"  name='post'  />
          {/* onChange={handleChange}  */}
          {/*<input  defaultValue={props.postData.city} type="text"  name='city'   />
          
          <input  defaultValue={props.postData.job_field} type="text"  name='field'   />
          
          <input  defaultValue={props.postData.job_post_title} type="text"  name='title'  /> */}
          {/* <Button onClick={handleUpdatePost} type='submit' variant="primary">Update</Button> */}
        {/* </form> */}
        <Form onSubmit={handleUpdatePost}>
        <Form.Group as={Col} >
          <Form.Label>post</Form.Label>
          <Form.Control
            type="text"
            name="post" 
          />
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            name="city" 
          />
          <Form.Label>Field</Form.Label>
          <Form.Control
            type="text"
            name="field" 
          />
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title" 
          />
        <Button  type="submit">Submit form</Button>
        </Form.Group>
        </Form>
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