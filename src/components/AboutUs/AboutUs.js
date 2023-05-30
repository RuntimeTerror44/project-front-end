import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our job connect platform! We are passionate about
          connecting talented individuals with exciting job opportunities and
          providing a space to showcase their portfolios. Whether you're a job
          seeker looking for your next career move or an employer searching for
          top talent, we've got you covered. We also encourage active engagement
          through social media posts and comments, fostering a supportive
          environment where everyone can share their experiences, insights, and
          success stories. Join us today and embark on a journey of professional
          growth, networking, and inspiration. Together, let's make meaningful
          connections and unlock new opportunities!
        </p>
        <h2>Contact us</h2>
        <h3>Get in touch and let us know how we can help.</h3>
        <div className="card-container">
          <Row>
            <Col>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://www.logolynx.com/images/logolynx/cc/cc6d40a6d81fdef048f3f358919ffb04.jpeg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">Esraa Obeido</Card.Title>
                  <Card.Text className="card-text">
                    FullStack Web Developer
                  </Card.Text>
                </Card.Body>
                <Card.Body className="social-links d-flex justify-content-center align-items-center">
                  <Card.Link
                    href="https://www.facebook.com/your_facebook_account"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-icon facebook"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/your_github_account"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-icon github"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://twitter.com/your_twitter_account"
                    target="_blank"
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-icon twitter"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://www.logolynx.com/images/logolynx/cc/cc6d40a6d81fdef048f3f358919ffb04.jpeg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">Esraa Obeido</Card.Title>
                  <Card.Text className="card-text">
                    FullStack Web Developer
                  </Card.Text>
                </Card.Body>
                <Card.Body className="social-links d-flex justify-content-center align-items-center">
                  <Card.Link
                    href="https://www.facebook.com/your_facebook_account"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-icon facebook"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/your_github_account"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-icon github"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://twitter.com/your_twitter_account"
                    target="_blank"
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-icon twitter"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://www.logolynx.com/images/logolynx/cc/cc6d40a6d81fdef048f3f358919ffb04.jpeg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">Esraa Obeido</Card.Title>
                  <Card.Text className="card-text">
                    FullStack Web Developer
                  </Card.Text>
                </Card.Body>
                <Card.Body className="social-links d-flex justify-content-center align-items-center">
                  <Card.Link
                    href="https://www.facebook.com/your_facebook_account"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-icon facebook"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/your_github_account"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-icon github"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://twitter.com/your_twitter_account"
                    target="_blank"
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-icon twitter"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://www.logolynx.com/images/logolynx/cc/cc6d40a6d81fdef048f3f358919ffb04.jpeg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">Esraa Obeido</Card.Title>
                  <Card.Text className="card-text">
                    FullStack Web Developer
                  </Card.Text>
                </Card.Body>
                <Card.Body className="social-links d-flex justify-content-center align-items-center">
                  <Card.Link
                    href="https://www.facebook.com/your_facebook_account"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-icon facebook"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/your_github_account"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-icon github"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://twitter.com/your_twitter_account"
                    target="_blank"
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-icon twitter"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://www.logolynx.com/images/logolynx/cc/cc6d40a6d81fdef048f3f358919ffb04.jpeg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">Esraa Obeido</Card.Title>
                  <Card.Text className="card-text">
                    FullStack Web Developer
                  </Card.Text>
                </Card.Body>
                <Card.Body className="social-links d-flex justify-content-center align-items-center">
                  <Card.Link
                    href="https://www.facebook.com/your_facebook_account"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-icon facebook"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/your_github_account"
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-icon github"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                  <Card.Link
                    href="https://twitter.com/your_twitter_account"
                    target="_blank"
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-icon twitter"
                      style={{ marginRight: "5px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more Col components for additional cards */}
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
