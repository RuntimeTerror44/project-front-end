import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Modalcomments(props){

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
    <Button variant="secondary" onClick={props.handleclose} style={{display:'inline-flex',marginLeft:'30px',marginTop:'18px'}}>
      Close
    </Button>
    <Button variant="primary" onClick={props.handleclose} >
      Add Comment
    </Button>
  </Modal.Footer>
</Modal>


)
}

export default Modalcomments