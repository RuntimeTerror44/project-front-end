import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PortfolioForm(){
    const[show, setShow]=useState(false)

    useEffect(()=>{
        setShow(true)
    },[])
const handleClose =()=>{
    setShow(false)
}

    const handleSubmit= async(e)=>{
        e.preventDefault()
        const serverUrl =`${process.env.REACT_APP_SERVER_URL}`
        const obj={
            userId: e.target.userId.value,
            fullname: e.target.fullname.value,
            email: e.target.email.value,  
            phomenum: e.target.phomenum.value,
            address: e.target.address.value,
            country: e.target.country.value,
            profilepic: e.target.profilepic.value,
            education:e.target.education.value,
            certifications:e.target.certifications.value,
            workexperience: e.target.workexperience.value,
            skills: e.target.skills.value,
            projects: e.target.projects.value,
            languages: e.target.languages.value,
        }
        const result = await axios.post(`${serverUrl}addPortfilioInfo`,obj)
        console.log(result.data)

    }
    return(
        <div>
            This is portfolio form
             <Modal show ={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Portfolio Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image rounded width="100%" />
       
        <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} >
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            name="userId" 
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
  
            type="text"
            name="fullname"
          />
       
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control
  
            type="text"
            name="email"
           
          />
       
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="phonenum"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Adress</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="address"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Country</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="country"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Profile Picture</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="profilepic"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Education</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="education"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Certifications</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="certifications"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Work experience</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="workexperience"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Skills</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="skills"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Projects</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="projects"
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Languages</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="languages"
            />
           
          </InputGroup>
        </Form.Group>
       

    </Form>
       
        </Modal.Body>
    
        
      </Modal>
        </div>
    )
}
export default PortfolioForm;