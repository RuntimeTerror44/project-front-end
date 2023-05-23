import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn ,MDBTypography,MDBIcon} from 'mdb-react-ui-kit';
import { Avatar, Space } from 'antd';
function UsersInfo(props){
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
    return (
<>


<MDBCard>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
    <p>{userData.email}</p>
    <p>{userData.id}</p>
      </MDBCardText>
    
    </MDBCardBody>
  </MDBCard>


</>




    )
}
export default UsersInfo;