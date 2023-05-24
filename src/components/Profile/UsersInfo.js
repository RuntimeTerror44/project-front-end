import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn ,MDBTypography,MDBIcon,MDBBreadcrumb,MDBBreadcrumbItem,MDBListGroup,MDBListGroupItem ,MDBProgress ,MDBProgressBar    } from 'mdb-react-ui-kit';
import { Avatar, Space } from 'antd';
import {
 
} from 'mdb-react-ui-kit';
function UsersInfo(props){
  const storedUserData = localStorage.getItem("userId");
  const userData = JSON.parse(storedUserData);
    return (
<>


{/* <MDBCard>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
    <p>{userData.email}</p>
    <p>{userData.id}</p>
      </MDBCardText>
    
    </MDBCardBody>
  </MDBCard> */}

<section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
             
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
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
      </MDBContainer>
    </section>









{/* 
<div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span className="font-weight-bold">Edogaru</span>
        <span className="text-black-50">edogaru@mail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="surname"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Address Line 1</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 1"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Address Line 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Postcode</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter email id"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Education</label>
            <input
              type="text"
              className="form-control"
              placeholder="education"
              defaultValue=""
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">State/Region</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="state"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience">
          <span>Edit Experience</span>
          <span className="border px-3 p-1 add-experience">
            <i className="fa fa-plus" />
            &nbsp;Experience
          </span>
        </div>
        <br />
        <div className="col-md-12">
          <label className="labels">Experience in Designing</label>
          <input
            type="text"
            className="form-control"
            placeholder="experience"
            defaultValue=""
          />
        </div>{" "}
        <br />
        <div className="col-md-12">
          <label className="labels">Additional Details</label>
          <input
            type="text"
            className="form-control"
            placeholder="additional details"
            defaultValue=""
          />
        </div>
      </div>
    </div>
  </div>
</div>






 */}




















  <meta charSet="UTF-8" />
      <title>Social Media Post UI Design</title>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <section className="main-content">
        <div className="container">
          <h1 className="text-center text-uppercase">Social Media Post</h1>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="post-block">
                <div className="d-flex justify-content-between">
                  <div className="d-flex mb-3">
                    <div className="mr-2">
                      <a href="#!" className="text-dark">
                        <img
                          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
                          alt="User"
                          className="author-img"
                        />
                      </a>
                    </div>
                    <div>
                      <h5 className="mb-0">
                        <a href="#!" className="text-dark">
                          Kiran Acharya
                        </a>
                      </h5>
                      <p className="mb-0 text-muted">SoftwreEngineer</p>
                      {/* <p className="mb-0 text-muted">5m</p>             edit date */}
                    </div>
                  </div>
                  <div className="post-block__user-options">
                    <a
                      href="#!"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
  
          <p></p>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item text-dark" href="#!">
                        <i className="fa fa-pencil mr-1" />
                        Edit
                      </a>
                      <a className="dropdown-item text-danger" href="#!">
                        <i className="fa fa-trash mr-1" />
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-block__content mb-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione laboriosam non atque, porro cupiditate commodi?
                    Provident culpa vel sit enim!
                  </p>
                  <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="Content img" />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex">
                    
                    </div>
                  
                  </div>
                  <p className="mb-0">
                   
                  
                  </p>
                </div>
                <hr />
                <div className="post-block__comments">
                  {/* Comment Input */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add your comment"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                  {/* Comment content */}
                  <div className="comment-view-box mb-3">
                    <div className="d-flex mb-2">
                      <img
                        src="https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg"
                        alt="User img"
                        className="author-img author-img--small mr-2"
                      />
                      <div>
                        <h6 className="mb-1">
                          <a href="#!" className="text-dark">
                            John doe
                          </a>{" "}
                          <p className="mb-0 text-muted" id="hello">SoftwreEngineer</p>
                          <small className="text-muted">1m</small>
                        </h6>
                        <p className="mb-1"></p>
              
                        
                        <div className="d-flex">
                          <a href="#!" className="text-dark mr-2">
                            <span>
                              <i className="fa fa-heart-o" />
                            </span>
                          </a>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More Comments */}
              
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

























</>




    )
}
export default UsersInfo;