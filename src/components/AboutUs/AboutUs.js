import $ from "jquery";
import jQuery from "jquery";
import { TweenMax } from "gsap";
import "./AboutUs.css";
import "typicons.font";


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

  TweenMax.staggerFrom(".heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);

  return (
    <>
      {/* Header Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <header id="header">
        <div className="main_nav">
          <div className="container">
            <div className="mobile-toggle">
              {" "}
              <span /> <span /> <span />{" "}
            </div>
            <nav>
              <ul>
                <li>
                  <a className="smoothscroll" href="#header">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#skills">
                    Services
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio">
                    Work
                  </a>
                </li>
             
              </ul>
            </nav>
          </div>
        </div>
        <div className="title">
          <div>
            <span className="typcn icon typcn-arrow-repeat heading" />
          </div>
          <div className="smallsep heading" />
          <h1 className="heading"> Career Connect</h1>
          <h2 className="heading">Lorem ipsum dolor sit amet</h2>
          <a className="smoothscroll" href="#about">
            <div className="mouse">
              <div className="wheel" />
            </div>
          </a>{" "}
        </div>
        <a className="smoothscroll" href="#about">
          <div className="scroll-down" />
        </a>{" "}
      </header>
      {/* About Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="about">
        <div className="container">
          <div className="row">
            <h1>About</h1>
            <div className="block" />
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
          <div className="row">
            <div className="six columns">
              <h3>
                <span className="typcn typcn-device-desktop icon" />
                Our Process
              </h3>
              <p>
                At Career Connet website, we follow a well-defined process to 
                ensure that both employers and job seekers have a seamless
                experience on our platform.
              </p>
            </div>
            <div className="six columns">
              <h3>
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
            <div className="row">
              <div className="six columns">
                <h3>
                  <span className="typcn typcn-cog-outline icon" />
                  Our Goal
                </h3>
                <p>
                Our primary goal is to bridge the gap between employers
                and job seekers, creating meaningful connections and fostering
                successful employment opportunities.
                </p>
              </div>
              <div className="six columns">
                <h3>
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
        <div className="container">
          <div className="row">
            <h1>Meet the Team</h1>
            <div className="block" />
            <p>
              We are a group of enthusiastic students from ASAC
              (Amman Tech Training Center) working together on an exciting
              project called 'Prep Project.' As students, we bring our
              diverse backgrounds, knowledge, and passion for technology
              to the table, Get to know our talented team members below!.
            </p>
          </div>
          <div className="row row-center">
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                width={210}
                height={210}
                alt=""
              />
              <h4>Naruto Uzumaki</h4>
              <p>FullStack Web Developer</p>
              <span className="typcn typcn-social-facebook-circular icon" />
              <span className="typcn typcn-social-instagram-circular icon" />
              <span className="typcn typcn-social-google-plus-circular icon" />
              <span className="typcn typcn-social-linkedin-circular icon" />{" "}
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                width={210}
                height={210}
                alt=""
              />
              <h4>Sasuke Uchiha</h4>
              <p>FullStack Web Developer</p>
              <span className="typcn typcn-social-facebook-circular icon" />
              <span className="typcn typcn-social-instagram-circular icon" />
              <span className="typcn typcn-social-google-plus-circular icon" />
              <span className="typcn typcn-social-linkedin-circular icon" />{" "}
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                width={210}
                height={210}
                alt=""
              />
              <h4>Shikamaru Nara</h4>
              <p>FullStack Web Developer</p>
              <span className="typcn typcn-social-facebook-circular icon" />
              <span className="typcn typcn-social-instagram-circular icon" />
              <span className="typcn typcn-social-google-plus-circular icon" />
              <span className="typcn typcn-social-linkedin-circular icon" />{" "}
            </div>
          </div>
          <div className="row row-center" style={{ marginTop: '30px' }}>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                width={210}
                height={210}
                alt=""
              />
              <h4>Naruto Uzumaki</h4>
              <p>FullStack Web Developer</p>
              <span className="typcn typcn-social-facebook-circular icon" />
              <span className="typcn typcn-social-instagram-circular icon" />
              <span className="typcn typcn-social-google-plus-circular icon" />
              <span className="typcn typcn-social-linkedin-circular icon" />{" "}
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                width={210}
                height={210}
                alt=""
              />
              <h4>Sasuke Uchiha</h4>
              <p>FullStack Web Developer</p>
              <span className="typcn typcn-social-facebook-circular icon" />
              <span className="typcn typcn-social-instagram-circular icon" />
              <span className="typcn typcn-social-google-plus-circular icon" />
              <span className="typcn typcn-social-linkedin-circular icon" />{" "}
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="skills">
        <div className="container">
          <h1>Services</h1>
          <div className="block" />
          <div className="row">
            <div className="one-third column">
              <h3>Jobs</h3>
              <p>
                Our website can offer a comprehensive job search platform
                where job seekers can explore and apply for relevant job
                opportunities.
              </p>
            </div>
            <div className="one-third column">
              <h3>Employer Recruitment</h3>
              <p>
                We Provide a platform where employers can create job
                listings, showcase their company culture, and manage
                applications from potential candidates.
              </p>
            </div>
            <div className="one-third column">
              <h3>Social Media</h3>
              <p>
                We Enhance user experience and create an enjoyable social
                community around your platform. Implement social media
                features.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <div className="progressBar">
                <h4>Data Analysis</h4>
                <div className="progressBarContainer">
                  <div className="progressBarValue value-90" />
                </div>
              </div>
              <div className="progressBar">
                <h4>Application Programmer</h4>
                <div className="progressBarContainer">
                  <div className="progressBarValue value-80" />
                </div>
              </div>
              <div className="progressBar">
                <h4>Cyber ​​Security</h4>
                <div className="progressBarContainer">
                  <div className="progressBarValue value-30" />
                </div>
              </div>
              <div className="progressBar">
                <h4>Data Protection</h4>
                <div className="progressBarContainer">
                  <div className="progressBarValue value-70" />
                </div>
              </div>
            </div>
            <div className="four columns">
              <p>
                It should be noted that our website is designed to serve the
                needs of job seekers and employers within the ever-evolving
                job market, Check out the available and most in-demand jobs
                this year.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="portfolio">
        <div className="container">
          <h1>Work</h1>
          <div className="block" />
          <div className="row">
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work One"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Two"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Three"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Four"
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: 30 }}>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Five"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Six"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Seven"
              />
            </div>
            <div className="three columns">
              {" "}
              <img
                src="http://placehold.it/220x220"
                className="image"
                alt="Work Eight"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section
–––––––––––––––––––––––––––––––––––––––––––––––––– */}
      <section id="testimonial">
        <div className="container">
          <div className="quoteLoop">
            <blockquote className="quote">
              {" "}
              <img
                src="http://placehold.it/100x100"
                width={100}
                height={100}
                alt=""
              />
              <h5>
                &nbsp;
                <br />
                ”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                <br />
                <small>Steve Bruce, Sed ut perspiciatis unde omnis</small>
              </h5>
            </blockquote>
            <blockquote className="quote">
              {" "}
              <img
                src="http://placehold.it/100x100"
                width={100}
                height={100}
                alt=""
              />
              <h5>
                &nbsp;
                <br />
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.”
                <br />
                <small>Tom Jones, Sed ut perspiciatis unde omnis</small>
              </h5>
            </blockquote>
          </div>
        </div>
      </section>
      
       
    </>
  );
}
export default AboutUs;
