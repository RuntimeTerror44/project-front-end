import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import './Home.css';

function HomePage() {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();

    if(postText.trim() === '') {
      return; // Skip empty posts
    }

    const newPost = {
      id: Date.now(),
      text: postText,
      comments: [],
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setPostText('');
  };

  const handleEditPost = (postId) => {
    // Handle edit functionality here
    console.log(`Edit post with id: ${postId}`);
  };

  const handleDeletePost = (postId) => {
    // Handle delete functionality here
    console.log(`Delete post with id: ${postId}`);
  };

  const handleAddComment = (postId, commentText) => {
    const newComment = {
      id: Date.now(),
      text: commentText,
    };

    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });
      return updatedPosts;
    });
  };

  return (
    <div>
      <Navbar className="navbar-light bg-light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">My website</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#jobs">Profile</Nav.Link>
              <Nav.Link href="#jobs">Jobs</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Share your thoughts here</h1>
            <Form onSubmit={handlePostSubmit}>
              <Form.Group controlId="postForm">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's on your mind?"
                  value={postText}
                  onChange={handlePostChange}
                />
              </Form.Group>
              <Button className="btnpost" variant="primary" type="submit">
                Post
              </Button>
            </Form>
            <hr />
            <div className="posts-container">
              {posts.map((post) => (
                <Card key={post.id} className="post">
                  <Card.Body>
                    <Card.Text>{post.text}</Card.Text>
                    <div className="comments-container">
                      {post.comments.map((comment) => (
                        <Card.Text key={comment.id} className="comment">
                          {comment.text}
                        </Card.Text>
                      ))}
                    </div>
                    <Form
                      onSubmit={(event) => {
                        event.preventDefault();
                        handleAddComment(post.id, event.target.comment.value);
                        event.target.comment.value = '';
                      }}
                    >
                      <Form.Group controlId={`commentForm-${post.id}`}>
                        <Form.Control type="text" name="comment" placeholder="Add a comment"/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Add Comment
                      </Button>
                    </Form>
                    <Dropdown align="end">
                    <Dropdown.Toggle variant="primary" id={`dropdown-${post.id}`} className="dropdown-toggle-vertical">
                     Options
                    </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEditPost(post.id)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeletePost(post.id)}>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
          <Col md={4} className="people-section">
            <h3>People with the Same Career</h3>
            <div className="people-list">
              <p>Person 1</p>
              <p>Person 2</p>
              <p>Person 3</p>
              <p>Person 4</p>
              <p>Person 5</p>
              <p>Person 6</p>
              <p>Person 7</p>
              <p>Person 8</p>
              <p>Person 9</p>
              <p>Person 10</p>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center p-4">
        <Container>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;
