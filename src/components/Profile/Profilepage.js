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
  // console.log(typeof userData.id)

  const [userInfo, setuserInfo] = useState([]);
  const [comment, setComment] = useState([]);
    const [jobs, setJobs] = useState([]);
    
  const sendReq = async () => {
    const serverUrl = `http://localhost:4000/userposts/1`;
    const result = await axios.get(serverUrl);
    
    setJobs(result.data);

  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users/1');
        setuserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  

    getData();
  }, []);


  const getComment = async () => {
    const serverUrl = `http://localhost:4000/comments/1`;
    const result = await axios.get(serverUrl);
    
    setComment(result.data);
    console.log(result.data)

  };



  useEffect(() => {
    
    sendReq() ;
    getComment();
  }, []);
 






 
 

return (

<>





      <UsersInfo user={userInfo} /> 
    







{jobs.map((item, i) => {
        return (


<Profileposts key={i} postData={item} />



  );
}



        )
                   
      }
{/* {comment.map((item, i) => {
        return (


<CommentComponent key={i} CommentData={item} />



  );
}



        )
                   
      } */}
      


     

</>
)


}
export default Profilepage


// <p>{props.postData.username}</p>
// <p>{props.postData.email}</p>
// <p>{props.postData.city}</p>