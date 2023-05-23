import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Modalcomments(props){
//     const [savedComment,setSavedComment]=useState("");
//   async function addToComments(){
//  const url=`http://localhost:4000/comments`
//  const data = {

//     content:"This is new Comment"
// };

//  await axios.post(url,data)

// setSavedData("")
// props.handleclose()

//   }
  // const handleCommentChange = (e) => {
  //   setSavedData(e.target.value);
  // };

return(

  <Modal show={props.showFlag} onHide={props.handleclose}>
  <Modal.Header closeButton>
    <Modal.Title>Comments</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Enter Your Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={props.handleclose}>
      Close
    </Button>
    <Button variant="primary" onClick={props.handleclose}>
      Add Comment
    </Button>
  </Modal.Footer>
</Modal>


)
}

export default Modalcomments