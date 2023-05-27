import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn ,MDBTypography,MDBIcon} from 'mdb-react-ui-kit';
import { Avatar, Space } from 'antd';
import axios from 'axios'
import UsersInfo from './UsersInfo';
import './Profilepage.css'
import Profileposts from './Profileposts';
import { useState,useEffect } from 'react'

function Profilepage(){

  
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  console.log(userData)
 
  const [userInfo, setuserInfo] = useState([]);
  const [comment, setComment] = useState([]);
    const [jobs, setJobs] = useState([]);
    
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}userposts/${userData[0].id}`;
    const result = await axios.get(serverUrl);
    
    setJobs(result.data);
    console.log(result)

  };

  useEffect(() => {
    const getData = async () => {
      try { 
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}users/${userData[0].id}`);
        setuserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  

    getData();
  }, []);


 


  useEffect(() => {
    
    sendReq() ;
  
  }, []);
 





  const x=comment
 
 

return (

<>





      <UsersInfo user={userInfo} /> 
    









      

      <Profileposts  postData={jobs} value={x}/>


</>
)


}
export default Profilepage


// <p>{props.postData.username}</p>
// <p>{props.postData.email}</p>
// <p>{props.postData.city}</p>