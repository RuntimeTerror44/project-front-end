import "../AboutUs/AboutUs.css";
import $ from "jquery";
import jQuery from "jquery";
import { TweenMax } from "gsap";
import "typicons.font";
import { color } from "framer-motion";

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


function AboutUs() {
  /*----------------------------------------------------*/
  /* Quote Loop
------------------------------------------------------ */

  function fade($ele) {
    $ele
      .fadeIn(1000)
      .delay(3000)
      .fadeOut(1000, function () {
        var $next = $(this).next(".quote");
        fade($next.length > 0 ? $next : $(this).parent().children().first());
      });
  }
  fade($(".quoteLoop > .quote").first());

  /*----------------------------------------------------*/
  /* Navigation
------------------------------------------------------ */

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".main_nav").addClass("sticky");
    } else {
      $(".main_nav").removeClass("sticky");
    }
  });

  // Mobile Navigation
  $(".mobile-toggle").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
      $(".main_nav").removeClass("open-nav");
    } else {
      $(".main_nav").addClass("open-nav");
    }
  });

  $(".main_nav li a").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
      $(".navigation").removeClass("open-nav");
      $(".main_nav").removeClass("open-nav");
    }
  });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  jQuery(document).ready(function ($) {
    $(".smoothscroll").on("click", function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          800,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });
  });

  TweenMax.staggerFrom(".abtus-heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);
 
  return (
    <>
    <body id="body" className="abtus-html">
      {/* Header Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <header id="header" className="abtus">
        <div className="titlee">
          <div>
            <span className="typcn icon typcn-arrow-repeat" />
          </div>
          <div clatitleessName="smallsep abtus-heading" className="smallsep abtus" />
          <h1 className="abtus-heading abtus abtus-h1"> Career Connect</h1>
          <h2 className="abtus-heading abtus abtus-h2">Empowering dreams, building careers</h2>
          <a className="smoothscroll abtus" href="#about">
            <div className="mouse">
              <div className="wheel" />
            </div>
          </a>{" "}
        </div>
        <a className="smoothscroll" href="#about">
          <div className="scroll-down" />
        </a>{" "}
      </header >
      {/* About Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="about">
        <div className="containerr">
          <div className="roww">
            <h1 className="abtus-abtus">About us</h1>
            <div className="blockk" />
            <p>
          Welcome to our job connect platform! We are passionate about
          connecting talented individuals with exciting job opportunities 
          and providing a space to showcase their portfolios. Whether
          you're a job seeker looking for your next career move or an
          employer searching for top talent, we've got you covered.
          We also encourage active engagement through social media posts
          and comments, fostering a supportive environment where everyone
          can share their experiences, insights, and success stories. 
          Join us today and embark on a journey of professional growth,
          networking, and inspiration. Together, let's make meaningful
          connections and unlock new opportunities!
            </p>
          </div>
          <div className="roww">
            <div className="six columnss">
              <h3 >
                <span className="typcn typcn-device-desktop icon" />
                Our Process
              </h3>
              <p>
                At Career Connet website, we follow a well-defined process to 
                ensure that both employers and job seekers have a seamless
                experience on our platform.
              </p>
            </div>
            <div className="six columnss">
              <h3 >
                <span className="typcn typcn-pen icon" />
                Our Approach
              </h3>
              <p>  
               In Our website we take a unique and approach to cater
               to the needs of both employers and job seekers.Our
               approach includes the following key aspects: 
               User-Centric Design, Community Building and Personalization.
              </p>
            </div>
            <div className="roww">
              <div className="six columnss">
                <h3 >
                  <span className="typcn typcn-cog-outline icon" />
                  Our Goal
                </h3>
                <p>
                Our primary goal is to bridge the gap between employers
                and job seekers, creating meaningful connections and fostering
                successful employment opportunities.
                </p>
              </div>
              <div className="six columnss">
                <h3 >
                  <span className="typcn typcn-lightbulb icon" />
                  Our Mission
                </h3>
                <p>
                Our mission is to revolutionize the way employers and job seekers
                connect and interact. We are committed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="team">
        <div className="containerr">
          <div className="roww">
            <h1>Meet the Team</h1>
            <div className="blockk" />
            <p>
              We are a group of enthusiastic students from ASAC
              (Amman Tech Training Center) working together on an exciting
              project called 'Prep Project.' As students, we bring our
              diverse backgrounds, knowledge, and passion for technology
              to the table, Get to know our talented team members below!.
            </p>
          </div>
          <div className="roww roww-center">
            <div className="three columnss " id="anas">
              {" "}
              <img
                src="https://media.licdn.com/dms/image/C4E03AQHMkbqWQvJwNA/profile-displayphoto-shrink_800_800/0/1657108303529?e=1691020800&v=beta&t=SCR4toNuMHwks0_34A6Ne5RWXwVfnUo_3O0fyN4W_T8"
                width={250}
                height={250}
                alt=""
                className="animated-image"
              />
              <h4>Anas Alsmadi</h4>
              <p>FullStack Web Developer</p>
              <a href="https://github.com/Anasalsmadi11" target="_blank" rel="noopener noreferrer">
              <span className="typcn icon typcn-social-github" />
              </a>
              <a href="https://www.linkedin.com/in/anas-alsmadi-4585691a4/" target="_blank" rel="noopener noreferrer"> 
              <span className="typcn typcn-social-linkedin-circular icon" />
              </a>
            </div>
            <div className="three columnss">
              {" "}
              <img
                src="https://media.licdn.com/dms/image/D4D03AQF2QVaD7rVcDA/profile-displayphoto-shrink_800_800/0/1664100027251?e=1691020800&v=beta&t=Q5ry1Ec176HSwTF3-waaX_p0zeAabRgqWggveZekiDQ"
                width={210}
                height={210}
                alt=""
                className="animated-image"

              />
              <h4>Mohammad Al-jamal</h4>
              <p>FullStack Web Developer</p>
              <a href="https://github.com/Mohammad-Aljamal" target="_blank" rel="noopener noreferrer">
              <span className="typcn icon typcn-social-github" />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-aljamal-2783751a3/" target="_blank" rel="noopener noreferrer"> 
              <span className="typcn typcn-social-linkedin-circular icon" />
              </a>
            </div>
            
            <div className="three columnss" id="Mohannad">
              {" "}
              <img
                src="https://ca.slack-edge.com/TNGRRLUMA-U04UXLQU9QA-2ddcf4374186-512"
                width={210}
                height={210}
                alt=""
                className="animated-image"

              />
              <h4>Mohannad abu qare'a</h4>
              <p>FullStack Web Developer</p>
              <a href="https://github.com/mohannaddQA" target="_blank" rel="noopener noreferrer">
              <span className="typcn icon typcn-social-github" />
              </a>
              <a href="https://www.linkedin.com/in/mohannadqa/" target="_blank" rel="noopener noreferrer"> 
              <span className="typcn typcn-social-linkedin-circular icon" />
              </a>
            </div>
          </div>
          <div className="roww roww-center" style={{ marginTop: '30px' }}>
            <div className="three columnss" id="esraa">
              {" "}
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFAp2EtptkmzQ/profile-displayphoto-shrink_800_800/0/1630698403792?e=1691020800&v=beta&t=OZU59CxLdBVxPc7jIe2jJKEP7qGOwtp8_s705TnblYY"
                width={210}
                height={210}
                alt=""
                className="animated-image"

              />
              <h4>Esraa Obeido</h4>
              <p>FullStack Web Developer</p>
              <a href="https://github.com/esraaobeido" target="_blank" rel="noopener noreferrer">
              <span className="typcn icon typcn-social-github" />
              </a>
              <a href="https://www.linkedin.com/in/esraa-obeido/" target="_blank" rel="noopener noreferrer"> 
              <span className="typcn typcn-social-linkedin-circular icon" />
              </a>
            </div>
            <div className="three columnss">
              {" "}
              <img
                src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
                width={210}
                height={210}
                alt=""
                className="animated-image"

              />
              <h4>Motasem Sulaiman</h4>
              <p>FullStack Web Developer</p>
              <a href="https://github.com/Motasem-Sulaiman" target="_blank" rel="noopener noreferrer">
              <span className="typcn icon typcn-social-github" />
              </a>
              <a href="https://www.linkedin.com/in/motasem-sulaiman-2832b3251/" target="_blank" rel="noopener noreferrer"> 
              <span className="typcn typcn-social-linkedin-circular icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="skills">
        <div className="containerr">
          <h1>Services</h1>
          <div className="blockk" />
          <div className="roww">
            <div className="one-third columnn">
              <h3 >Jobs</h3>
              <p>
                Our website can offer a comprehensive job search platform
                where job seekers can explore and apply for relevant job
                opportunities.
              </p>
            </div>
            <div className="one-third columnn">
              <h3 >Employer Recruitment</h3>
              <p>
                We Provide a platform where employers can create job
                listings, showcase their company culture, and manage
                applications from potential candidates.
              </p>
            </div>
            <div className="one-third columnn">
              <h3 >Social Media</h3>
              <p>
                We Enhance user experience and create an enjoyable social
                community around your platform. Implement social media
                features.
              </p>
            </div>
          </div>
         
        </div>
      </section>          
    </body>

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
              <MDBIcon fab icon="google" />
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
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    privasy statement
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    pricing
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
                  Amman , jordan
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  careers@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0796658743
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
          <p>CareerConnect</p>
        </div>
      </MDBFooter>
    </>
  );
}
export default AboutUs;
