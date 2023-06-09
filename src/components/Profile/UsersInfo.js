import { useState,useEffect } from 'react'
import axios from 'axios';
import Button from "react-bootstrap";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn ,MDBTypography,MDBIcon,MDBBreadcrumb,MDBBreadcrumbItem,MDBListGroup,MDBListGroupItem ,MDBProgress ,MDBProgressBar    } from 'mdb-react-ui-kit';
import { Avatar, Space } from 'antd';
import {
 
} from 'mdb-react-ui-kit';
import '../../test test/facebookcss.css'

function UsersInfo(props){
  const storedUserData = localStorage.getItem("userId");
  const userData =JSON.parse(storedUserData);console.log(userData)

    return ( 
<>


{/* {console.log(props.userInfo[1].firstname)} */}


      {/* <MDBContainer className="py-5">
        <MDBRow>
   
        </MDBRow>

        <MDBRow>
        
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage 
                  src={userData[0].profilepicture}
                  alt="avatar"
                  // className="rounded-circle"
                  
                  fluid />
                <p className="text-muted mb-1">{userData[0].firstname}</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  
               
                </div>
              </MDBCardBody>
            </MDBCard> 

            <MDBCard className="mb-4 mb-lg-0">
         
             
            </MDBCard> 
          
          
          
          <MDBCol lg="8">
            <MDBCard className="mb-4" >
              <MDBCardBody>
              <MDBCardImage style={{borderRadius:'200px'}}
                  src={userData[0].profilepicture}
                  alt="avatar"
                  className="rounded-circle"
                  
                  fluid />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData[0].firstname+" "+userData[0].lastname} </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData[0].email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData[0].phonenumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Career</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData[0].career}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData[0].address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
               
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
              
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
       <div className="vh-100" style={{ backgroundColor: '',marginBottom:'-350px' }}>
      <MDBContainer >
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5" style={{width:'800px'}}>
            <MDBCard style={{ borderRadius: '15px' ,marginTop:'100px' }} >
              <MDBCardBody className="p-8"  >
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '100px' }}
                      src={userData[0].profilepicture}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                   <div className="info-container" >
                    {/* <MDBCardTitle>{userData[0].firstname}</MDBCardTitle> */}
                 

                    <div className=""
                      style={{ backgroundColor: '#' }}>
                      <div>
                        <p className="small text-muted ">FullName</p>
                        <p className="mb-3">{userData[0].firstname+" "+userData[0].lastname}</p>
                      </div>
                      <div className="">
                        <p className="small text-muted">Phone.No</p>
                        <p className="mb-3">{userData[0].phonenumber}</p>
                      </div>
                      <div>
                        <p className="small text-muted ">City</p>
                        <p className="mb-3">{userData[0].city}</p>
                      </div>
                    </div>
                    <div className=""
                     >
                      <div>
                        <p className="small text-muted ">DateOfBitrh</p>
                        <p className="mb-3">{userData[0].dateofbirth}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted ">Country</p>
                        <p className="mb-3">{userData[0].country}</p>
                      </div>
                      <div>
                        <p className="small text-muted " style={{padding:'0px 16px'}}>Email</p>
                        <p className="mb">{userData[0].email}</p>
                      </div>
                      <a href="FormPersonalData">
                      <button  variant="primary" type="submit" style={{marginLeft:'5px',marginTop:'10px',background:'#84a0ce',color:'white',border:'1px' ,width:"40px",borderRadius:"5px",marginLeft:'200px'}} >
             <i className="uil uil-edit"></i>
          </button>
          </a>  </div>
                    <div className="d-flex pt-1">
             
                    </div>
                  </div>
                </div> 
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>







  















</>

    )
}
export default UsersInfo;