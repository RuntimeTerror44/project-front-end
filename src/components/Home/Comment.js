// import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col, Card, Dropdown } from 'react-bootstrap';

// function Comment(props){
//     // const handleAddComment = (postId, commentText) => {
//     //     const newComment = {
//     //       id: Date.now(),
//     //       text: commentText,
//     //     };
    
//     //     setPosts((prevPosts) => {
//     //       const updatedPosts = prevPosts.map((post) => {
//     //         if (post.id === postId) {
//     //           return {
//     //             ...post,
//     //             comments: [...post.comments, newComment],
//     //           };
//     //         }
//     //         return post;
//     //       });
//     //       return updatedPosts;
//     //     });
//     //   };
//     return(
//         <div>
            
        
//             <div className="posts-container">
//               {props.posts.map((post) => (
//                 <Card key={post.id} className="post">
//                   <Card.Body>
//                     <Card.Text>{post.text}</Card.Text>
//                     <div className="comments-container">
//                       {post.comments.map((comment) => (
//                         <Card.Text key={comment.id} className="comment">
//                           {comment.text}
//                         </Card.Text>
//                       ))}
//                     </div>


//                     <Form
//                       onSubmit={(event) => {
//                         event.preventDefault();
//                         handleAddComment(post.id, event.target.comment.value);
//                         event.target.comment.value = '';
//                       }}
//                     >
//                       <Form.Group controlId={`commentForm-${post.id}`}>
//                         <Form.Control type="text" name="comment" placeholder="Add a comment"/>
//                       </Form.Group>
//                       <Button variant="primary" type="submit">
//                         Add Comment
//                       </Button>
//                     </Form>
//                     <Dropdown align="end">
//                     <Dropdown.Toggle variant="primary" id={`dropdown-${post.id}`} className="dropdown-toggle-vertical">
//                      Options
//                     </Dropdown.Toggle>
//                       <Dropdown.Menu>
//                         <Dropdown.Item onClick={() => handleEditPost(post.id)}>Edit</Dropdown.Item>
//                         <Dropdown.Item onClick={() => handleDeletePost(post.id)}>Delete</Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </Card.Body>
//                 </Card>
//               ))}
//             </div>
//         </div>
//     )
// }
// export default Comment;