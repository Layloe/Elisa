import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PostsDisplay = ({ posts, onDelete, onLogout }) => {
    console.log('PostsDisplay props:', posts)

    return (
        <Container>
            {posts.map((week, weekIndex) => (
                <Row key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) (
                        <Col key={`day-${dayIndex}`} md={4}>
                            <h3>{day[0].dayOfWeek}</h3>
                            {day.map((post, postIndex) => (
                                <Card key={`posts-${postIndex}`} className="mb-3">
                                    <Card.Body>
                                    <Card.Title>Time of Day: {post.timeOfDay}</Card.Title>
                                    <Card.Text>Blood Pressure: {post.bloodPressure}</Card.Text>
                                    <Card.Text>Severity: {post.severity}</Card.Text>
                                    <Card.Text>Assigned To: {post.assignedTo}</Card.Text>
                                    <Card.Text>Status: {post.status}</Card.Text>
                                    <Card.Text>Date: {post.date}</Card.Text>
                                    <Button variant="danger" onClick={() => onDelete(post._id)}>Delete</Button>
                                    {/* <Button variant="warning" onClick={() => onLogout(user._id) }>Logout</Button> */}
                                    </Card.Body>

                                </Card>
                            ))} 
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    )
}

export default PostsDisplay