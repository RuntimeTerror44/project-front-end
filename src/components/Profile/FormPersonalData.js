import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { json } from "react-router-dom";
function FormPersonalData(props) {
  const storedData = localStorage.getItem('userId');
  const storageData=JSON.parse(storedData)
  console.log(storageData)
  console.log(storageData[0].id)
// Parse the retrieved data if necessary
// Access specific properties or values from the retrieved data
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const birthDate = date;
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}users/${storageData[0].id}`;
    const obj = {
      firstname: e.target.first_name.value,
      lastname: e.target.last_name.value,
      email : e.target.Email.value,
      dateofbirth : date,
      country: e.target.countrey.value,
      city: e.target.city.value,
      phonenumber: e.target.phone_number.value,
      address: e.target.address.value,
      gender: e.target.formHorizontalRadios.value,
      profilePicture: e.target.profile_picture.value,
      imgForCover: e.target.cover_picture.value
    };
    const result = await axios.put(serverUrl, obj);
    // tackDataFromChaildAfterUbdate(result.data);
    console.log(result.data);
    const newData=result.data
    localStorage.setItem('userId',JSON.stringify(newData))
    };
  // const updateData = () => {
  //   const newData = 'New Data';
  //   localStorage.setItem('userId', newData);
  //   setData(newData);
  // };
  return (
    <>
      {/* <Modal >                                                show={props.showFlag} onHide={props.handleClose} */}
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="first_name" type="text" defaultValue="" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control name="last_name" type="text" defaultValue="" />
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="Email" type="" defaultValue="" />
            </Form.Group>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Bate of Birth</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Countrey</Form.Label>
                <Form.Control
                  name="countrey"
                  type="text"
                  defaultValue="Jordan"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>City</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control name="city" type="text" defaultValue="" />
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  name="phone_number"
                  type="number"
                  defaultValue=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control name="address" type="text" defaultValue="" />
              </InputGroup>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control name="profile_picture" type="file" />
            </Form.Group>
             <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Cover Picture</Form.Label>
              <Form.Control name="cover_picture" type="file" />
            </Form.Group>
            <Button type="submit">
              {/*onClick={props.handleClose}*/}
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" >                  {/*onClick={props.handleClose}
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FormPersonalData;