import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostsDisplay = ({ posts, onDelete, onLogout }) => {
    console.log('PostsDisplay props:', posts)

    return (
        <Container>
            {posts.map((week, weekIndex) => (
                <Row key={`week-${weekIndex}`} className="mb-3">
                    {week.map((day, dayIndex) => (
                        <Col key={`day-${dayIndex}`} md={4}>
                            { day && day.length > 0 ? (                                
                            day.map((post, postIndex) => (
                                <Card key={`posts-${postIndex}`} className="mb-3">
                                    <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>Time of Day: {post.timeOfDay}</Card.Text>
                                    <Card.Text>Blood Pressure: {post.bloodPressure}</Card.Text>
                                    <Card.Text>Severity: {post.severity}</Card.Text>
                                    <Card.Text>Assigned To: {post.assignedTo}</Card.Text>
                                    <Card.Text>Status: {post.status}</Card.Text>
                                    <Card.Text>Date: {new Date (post.date).toLocaleDateString()}</Card.Text>
                                    <Button variant="danger" onClick={() => onDelete(post._id)}>Delete</Button>
                                    <Button variant="primary" as={Link} to={`/posts/edit/${post._id}`}>Edit</Button>
                                    {/* <Button variant="warning" onClick={() => onLogout(user._id) }>Logout</Button> */}
                                    </Card.Body>

                                </Card>
                            ))
                            
                            ) : (
                                <Card className="mb-3">
                                <Card.Body>
                                    <Card.Text>No posts fot this day</Card.Text>
                                </Card.Body>
                                </Card>
                                
                            )}
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    )
}

export default PostsDisplay