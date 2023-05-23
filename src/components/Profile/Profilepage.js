import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn ,MDBTypography,MDBIcon} from 'mdb-react-ui-kit';
import { Avatar, Space } from 'antd';
import axios from 'axios'
import UsersInfo from './UsersInfo';
import './Profilepage.css'
import Profileposts from './Profileposts';
import { useState,useEffect } from 'react'
function Profilepage(){

    const [jobs, setJobs] = useState([]);
  const sendReq = async () => {
    const serverUrl = `http://localhost:4000/posts/1`;
    const result = await axios.get(serverUrl);
    setJobs(result.data);

  };
  useEffect(() => {
    sendReq();
  }, []);
  // const [users, setUsers] = useState([]);
  // const sendUser = async () => {
  //   const serverUrl = `http://localhost:4000/usersbyid/1`;
  //   const result = await axios.get(serverUrl);
  //   setUsers(result.data);
  //   console.log(result.data)

  // };
  // useEffect(() => {
  //   sendUser();
  // }, []);
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
  console.log(userData.id)


return (

<>

<UsersInfo />

{jobs.map((item, i) => {
        return (


<Profileposts key={i} postData={item} />


  );
}



        )
                   
      }
{/* {users.map((item2, i) => {
        return (


<Profileposts key={i} usersData={item2} />


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