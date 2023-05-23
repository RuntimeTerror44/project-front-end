import React, { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./LandingPage.scss";
import $ from "jquery";
import { Button, Space } from "antd";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Card, Col, Row } from "antd";
import LoginButton from "./login/Loginbutton";
import LogoutButton from "./login/Logoutbutton";

export default function LandingPage() {
  //// page structure ///////////////// jquery
  class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $(".et-hero-tab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }

    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }

    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }

    checkTabContainerPosition() {
      let offset =
        $(".et-hero-tabs").offset().top +
        $(".et-hero-tabs").height() -
        this.tabContainerHeight;
      if ($(window).scrollTop() > offset) {
        $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
      } else {
        $(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
      }
    }

    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".et-hero-tab").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }

    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".et-hero-tab-slider").css("width", width);
      $(".et-hero-tab-slider").css("left", left);
    }
  }
  new StickyNavigation();

  //////////////cards related code
  const { Meta } = Card;
  ////////////// auth logic handle
  const loginButtonRef = useRef(null); //loginref
  const logoutButtonRef = useRef(null); //loginref
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // to read the state of auth
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", "true");
    }
  }, [isAuthenticated]);

  ///// handle login click
  const handleButtonClick = () => {
    // Call the button click handler in Component1
    // by accessing the ref and invoking its click method
    // This will trigger the click event on the button in Component1
    loginButtonRef.current.handleButtonClick();
  };

  //handle logout click
  const handleButtonClick2 = () => {
    // Call the button click handler in Component1
    // by accessing the ref and invoking its click method
    // This will trigger the click event on the button in Component1
    logoutButtonRef.current.handleButtonClick();
  };

  return (
    <>
      <LoginButton ref={loginButtonRef} />
      <LogoutButton ref={logoutButtonRef} />
      <div className="et-hero-tabs-container">
        <h1>
          <a href="#">main</a>
        </h1>

        <a className="et-hero-tab" href="#tab-es6">
          vision
        </a>
        <a className="et-hero-tab" href="#tab-flexbox">
          features
        </a>
        <a className="et-hero-tab" href="#tab-react">
          Team
        </a>
        <a className="et-hero-tab" href="#tab-angular">
          Angular
        </a>

        <Space>
          <>
            {" "}
            {!isAuthenticated ? (
              <Button
                type="primary"
                shape="round"
                size={"large"}
                onClick={handleButtonClick}
              >
                {" "}
                sign in
              </Button>
            ) : (
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
            )}
          </>
        </Space>

        <span className="et-hero-tab-slider"></span>
      </div>
      <section className="et-hero-tabs">
        <h1>CareerConnect</h1> <h2>where careers meet connections!</h2>
        <h3>
          Step into a world of endless possibilities where professionals like
          yourself come together to network, collaborate, and thrive. Join us
          today and embrace a journey full of career growth and meaningful
          connections.
        </h3>
        <Space>
          {!isAuthenticated ? (
            <Button
              type="primary"
              shape="round"
              size={"large"}
              onClick={handleButtonClick}
            >
              Join Us Now{" "}
            </Button>
          ) : (
            <h1>Hello</h1>
          )}
        </Space>
      </section>
      {/*Main*/}
      <main className="et-main">
        {/*vision*/}
        <section className="et-slide" id="tab-es6">
          <h1>Our vision</h1>
          <h3>something about career connect</h3>
        </section>
        {/*features*/}
        <section className="et-slide" id="tab-flexbox">
          <h1>features</h1>
          <h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
            </ul>
          </h3>
        </section>
        {/*team*/}
        <section className="et-slide" id="tab-react">
          <h1>our team</h1> <hr />
          <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
              <Col className="gutter-row" span={8}>
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <MDBIcon fab icon="google" />,
                    <MDBIcon fab icon="github" />,
                    <MDBIcon fab icon="linkedin-in" />,
                  ]}
                >
                  <Meta
                    title="mohannad"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={8}>
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <MDBIcon fab icon="google" />,
                    <MDBIcon fab icon="github" />,
                    <MDBIcon fab icon="linkedin-in" />,
                  ]}
                >
                  <Meta
                    title="mohannad"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={8}>
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <MDBIcon fab icon="google" />,
                    <MDBIcon fab icon="github" />,
                    <MDBIcon fab icon="linkedin-in" />,
                  ]}
                >
                  <Meta
                    title="mohannad"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>{" "}
            <hr />
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row">
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <MDBIcon fab icon="google" />,
                    <MDBIcon fab icon="github" />,
                    <MDBIcon fab icon="linkedin-in" />,
                  ]}
                >
                  <Meta
                    title="mohannad"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col className="gutter-row">
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <MDBIcon fab icon="google" />,
                    <MDBIcon fab icon="github" />,
                    <MDBIcon fab icon="linkedin-in" />,
                  ]}
                >
                  <Meta
                    title="mohannad"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
            <br />
            <br />
            <br />
          </>
        </section>
        <section className="et-slide" id="tab-angular">
          <h1>other</h1>
          <h3>something </h3>
        </section>
      </main>
      {/*footer */}
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Career Connect
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4"></MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold"> CareerConnect </a>
        </div>
      </MDBFooter>
    </>
  );
}
