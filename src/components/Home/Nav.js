import React, { useState, useRef } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Button } from "antd";
import LogoutButton from "../Landingpage/login/Logoutbutton";
export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);
  const handleButtonClick2 = () => {
    // Call the button click handler in Component1
    // by accessing the ref and invoking its click method
    // This will trigger the click event on the button in Component1
    logoutButtonRef.current.handleButtonClick();
  };
  const logoutButtonRef = useRef(null); //loginref
  return (
    <>
      <LogoutButton ref={logoutButtonRef} />
      <MDBNavbar className="nav-bar"  expand="lg" light style={{backgroundColor:"#85b6e2" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" style={{ color:'white' ,paddingLeft:"75px"  }}>CareerConnect</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/home" style={{ color:'white' ,paddingLeft:"300px" }}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="job" style={{ color:'white',paddingLeft:"100px"  }}>jobs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="profilepage" style={{ color:'white',paddingLeft:"100px"  }}>Profile</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button" style={{ color:'white'  }}>
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem></MDBNavbarItem>
            </MDBNavbarNav>
            <Button
            id="logout"
            style={{backgroundColor:"#85b4ee",    textTransform: "uppercase",fontFamily:"Century Gothic, Lato, sans-serif",fontSize:"20px"}}
              danger 
              type="primary"
              shape="round"
              size={"large"}
              className="btn btn-primary"
              onClick={handleButtonClick2}
            >
              {" "}
              sign out
            </Button>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

{/* <link rel="stylesheet" href="./style.css" />
      <nav >
        <div className="container">
          <h2 className="logo" style={{paddingRight:"300px"}}>CareerConnect</h2>
          <a href="home"><h5 className="navbarr">Home</h5></a>
          <a href="job"><h5 className="navbarr">Job</h5></a>
          <a href="profilepage"><h5 className="navbarr">Profile</h5></a>
     
      
          <div className="create">
            <LogoutButton ref={logoutButtonRef} />
            <Button
              danger
              type="primary"
              shape="round"
              size={"large"}
              onClick={handleButtonClick2}
            >
              {" "}
              sign out
            </Button>
            {/* <div className="profile-photo">
              <img src="./images/profile-1.jpg" alt="" />
            </div> */}
          {/* </div>
        </div> 
      </nav> */}
    </>
  );
}

// export default Nav;







