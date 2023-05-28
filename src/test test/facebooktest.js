import React, { useEffect, useState } from "react";

import axios from "axios";

import "./facebookcss.css";
function Facebooktest(props) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        mySocial - Responsive Social Media Website Using HTML, CSS, &amp;
        JavaScript
      </title>
      {/* IconScout CDN */}
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"
      />
      {/* Stylesheet */}
      <link rel="stylesheet" href="./style.css" />
      <nav>
        <div className="container">
          <h2 className="logo">CareerConnect</h2>
          <div className="search-bar">
            <i className="uil uil-search" />
            <input
              type="search"
              placeholder="Search for creators, inspirations, and projects"
            />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">
              SignOut
            </label>
            <div className="profile-photo">
              <img src="./images/profile-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </nav>
      {/*------------------------------ MAIN ---------------------------------*/}
      <main>
        <div className="container">
          {/*--------------- LEFT ------------------*/}
          <div className="left">
            <a className="profile">
              <div className="profile-photo">
                <img src="./images/profile-1.jpg" />
              </div>
              <div className="handle">
                <h4>Motasem</h4>
                <p className="text-muted">......</p>
              </div>
            </a>
            {/*--------------- SIDEBAR ------------------*/}
            <div className="sidebar">
              <a className="menu-item active">
                <span>
                  <i className="uil uil-home" />
                </span>
                <h3>Home</h3>
              </a>

              <a className="menu-item" id="notifications">
                <span>
                  <i className="uil uil-bell"></i>
                </span>
                <h3>Profile</h3>
                {/*------------- NOTIFICATION POPUP -------------*/}
                <div className="notifications-popup">
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-2.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>Keke Benjamin</b> accepted your friend request
                      <small className="text-muted">2 Days Ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-3.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>John Doe</b> commented on your post
                      <small className="text-muted">1 Hour Ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-4.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>Marry Oppong</b> and <b>283 Others</b> liked your post
                      <small className="text-muted">4 Minutes Ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-5.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>Doris Y. Lartey</b> commented on a post you are tagged
                      in
                      <small className="text-muted">2 Days Ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-6.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>Keyley Jenner</b> commented on a post you are tagged in
                      <small className="text-muted">1 Hour Ago</small>
                    </div>
                  </div>
                  <div>
                    <div className="profile-photo">
                      <img src="./images/profile-7.jpg" />
                    </div>
                    <div className="notification-body">
                      <b>Jane Doe</b> commented on your post
                      <small className="text-muted">1 Hour Ago</small>
                    </div>
                  </div>
                </div>
                {/*------------- END NOTIFICATION POPUP -------------*/}
              </a>
              <a className="menu-item" id="messages-notifications">
                <span>
                  <i className="uil uil-envelope-alt"></i>
                </span>
                <h3>Jobs</h3>
              </a>

              <a className="menu-item">
                <span>
                  <i className="uil uil-chart-line" />
                </span>
                <h3>AbotuUs</h3>
              </a>
            </div>
            {/*--------------- END OF SIDEBAR ------------------*/}
            <label className="btn btn-primary" htmlFor="create-post">
              Create Post
            </label>
          </div>
          {/*--------------- MIDDLE ------------------*/}
          <div className="middle">
            {/*--------------- STORIES ------------------*/}

            {/*--------------- END OF STORIES ------------------*/}
            <form action="" className="create-post">
              <div className="profile-photo">
                <img src="./images/profile-1.jpg" />
              </div>
              <input
                type="text"
                placeholder="What's on your mind, Diana ?"
                id="create-post"
              />
              <input
                type="submit"
                defaultValue="Post"
                className="btn btn-primary"
              />
            </form>
            {/*--------------- FEEDS ------------------*/}
            <div className="feeds">
              {/*--------------- FEED 1 ------------------*/}
             
                <div className="feed">
                  <div className="head">
                    <div className="user">
                      <div className="profile-photo">
                        <img src="./images/profile-13.jpg" />
                      </div>
                      <div className="info">
                        <h3>Motasem</h3>
                        <small>Software Engineer</small>
                      </div>
                    </div>
                    <span className="edit">
                      <i className="uil uil-ellipsis-h" />
                    </span>
                  </div>
                  <div className="photo">
                    <p>add image</p>
                  </div>
                  <div className="action-buttons">
                    <div className="interaction-buttons"></div>
                    <div className="bookmark">
                      <span>
                        <i className="uil uil-bookmark-full" />
                      </span>
                    </div>
                  </div>
                  <div className="liked-by"></div>
                  <div className="caption">
                    <p>
                      <p>add things here</p>
                    </p>
                  </div>
                  <hr></hr>
                  <div className="comments text-muted">View all 277 comments</div>
                  <br></br>
                  <div className="profile-photo">
                    <img src="./images/profile-13.jpg" />
                  </div>
                  <div className="info">
                    <p>Motasem</p>
                    <p>this is my comment</p>
                  </div>
                </div>;
          
              {/* <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-13.jpg" />
                </div>
                <div className="info">
                  <h3>Motasem</h3>
                  <small>Software Engineer</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <p>add image</p>
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
           
              
           
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
           
            </div>
            <div className="caption">
              <p>
                
             <p>add things here</p>
              </p>
            </div>
            <hr></hr>
            <div className="comments text-muted">View all 277 comments</div>
            <br></br>
            <div className="profile-photo">
                  <img src="./images/profile-13.jpg" />
                </div>
                <div className="info">
                  <p>Motasem</p>
                  <p>this is my comment</p>
                   */}
              {/* </div> */}
              {/* </div> */}

              {/*--------------- END OF FEED 1 ------------------*/}
            </div>
            {/*--------------- END OF FEEDS ------------------ */}
          </div>
          {/*--------------- END OF MIDDLE ------------------*/}
          {/*--------------- RIGHT ------------------*/}
          <div className="right">
            {/*----- MESSAGES -----*/}
            <div className="messages">
              <div className="heading">
                <h4>Messages</h4>
                <i className="uil uil-edit" />
              </div>
              {/*----- SEARCH BAR -----*/}
              <div className="search-bar">
                <i className="uil uil-search" />
                <input
                  type="search"
                  placeholder="Search messages"
                  id="message-search"
                />
              </div>
              {/*----- MESSAGES CATEGORY -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}

              {/*----- MESSAGES -----*/}
              <div className="message">
                <div className="profile-photo">
                  <img src="./images/profile-15.jpg" />
                </div>
                <div className="message-body">
                  <h5>Benjamin Dwayne</h5>
                  <p className="text-muted">haha got that!</p>
                </div>
              </div>
            </div>
            {/*----- END OF MESSAGES -----*/}
            {/*----- FRIEND REQUEST -----*/}
            <div className="friend-requests">
              <h4>Requests</h4>

              <div className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img src="./images/profile-17.jpg" />
                  </div>
                  <div>
                    <h5>Megan Baldwin</h5>
                    <p className="text-muted">5 mutual friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*--------------- END OF RIGHT ------------------*/}
        </div>
      </main>
      {/*--------------- THEME CUSTOMIZATION ------------------*/}
      <div className="customize-theme">
        <div className="card">
          <h2>Customize your view</h2>
          <p className="text-muted">
            Manage your font size, color, and background
          </p>
          {/*--------- FONT SIZE ---------*/}
          <div className="font-size">
            <h4>Font Size</h4>
            <div>
              <h6>Aa</h6>
              <div className="choose-size">
                <span className="font-size-1" />
                <span className="font-size-2 active" />
                <span className="font-size-3" />
                <span className="font-size-4" />
                <span className="font-size-5" />
              </div>
              <h3>Aa</h3>
            </div>
          </div>
          {/*--------- PRIMARY COLORS ---------*/}
          <div className="color">
            <h4>Color</h4>
            <div className="choose-color">
              <span className="color-1 active" />
              <span className="color-2" />
              <span className="color-3" />
              <span className="color-4" />
              <span className="color-5" />
            </div>
          </div>
          {/*--------- BACKGROUND COLORS ---------*/}
          <div className="background">
            <h4>Background</h4>
            <div className="choose-bg">
              <div className="bg-1 active">
                <span />
                <h5 htmlFor="bg-1">Light</h5>
              </div>
              <div className="bg-2">
                <span />
                <h5 htmlFor="bg-2">Dim</h5>
              </div>
              <div className="bg-3">
                <span />
                <h5 htmlFor="bg-3">Dark</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Facebooktest;
