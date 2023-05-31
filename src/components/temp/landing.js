import $ from "jquery";
import { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./landing.css";
import LoginButton from "../Landingpage/login/Loginbutton";
import LogoutButton from "../Landingpage/login/Logoutbutton";
import { Button, Space } from "antd";
export default function Landing() {
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
  //handle logout click
  const handleButtonClick2 = () => {
    // Call the button click handler in Component1
    // by accessing the ref and invoking its click method
    // This will trigger the click event on the button in Component1
    logoutButtonRef.current.handleButtonClick();
  };
  $(document).ready(function () {
    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
      scrolling = true;

      $(pgPrefix + curPage)
        .removeClass("inactive")
        .addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");

      setTimeout(function () {
        scrolling = false;
      }, animTime);
    }

    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    }

    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    }

    $(document).on("mousewheel DOMMouseScroll", function (e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    });

    $(document).on("keydown", function (e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  });
  return (
    <>
      <LoginButton ref={loginButtonRef} />
      <LogoutButton ref={logoutButtonRef} />
      <div className="skw-pages">
        <div className="skw-page skw-page-1 active">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content" />
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Career Connect</h2>
                <p className="skw-page__description">
                  A platform for job seekers and employers to connect,
                  collaborate, and post their ideas . Whether youre a talented
                  professional searching for your next big opportunity or an
                  organization seeking exceptional talent, weve got you covered.
                </p>
                <br />
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
                    <>
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
                      <br></br>
                      <p>OR</p>
                      <a href="/home">continue to your home</a>
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-2">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading"> "it's a job hub" </h2>
                <p className="skw-page__description">
                  {`Easily post job openings on our platform to reach a wide
                audience of talented individuals. Showcase your company's
                opportunities OR you Discover many job opportunities and filter them by locations or career, and find the perfect match for your skills.`}
                </p>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content" />
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-3">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content" />
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">"connect with your peers"</h2>
                <p className="skw-page__description">
                  Connect and socialize with like-minded professionals,
                  fostering meaningful relationships and expanding your network.
                  Our platform provides a dedicated space for you to interact,
                  engage, and collaborate with peers who share similar interests
                  and ambitions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-4">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">
                  "create your professional resume"
                </h2>
                <p className="skw-page__description">
                  Effortlessly create a professional curriculum vitae (CV) to
                  present your experience, skills, and qualifications in an
                  appealing format
                </p>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content" />
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-5">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content" />
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">
                  {!isAuthenticated ? (
                    <>
                    <Button
                      type="primary"
                      shape="round"
                      size={"large"}
                      onClick={handleButtonClick}
                    >
                      Join Us Now{" "}
                    </Button>
                    <p>OR</p>
                    <p className="skw-page__description">
                      check more about us <a href="/about">here</a>
                    </p>
                    </>
                  ) : (
                    <>
                      <a href="/home">continue to your home</a>
                      <br></br>
                      <p>OR</p>
                      <p className="skw-page__description">
                        check more about us <a href="/about">here</a>
                      </p>
                    </>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
