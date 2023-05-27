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
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#E3F2FD" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
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
                <MDBNavbarLink active aria-current="page" href="/home">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="jobs">jobs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
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
              danger
              type="primary"
              shape="round"
              size={"large"}
              onClick={handleButtonClick2}
            >
              {" "}
              sign out
            </Button>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

// export default Nav;







