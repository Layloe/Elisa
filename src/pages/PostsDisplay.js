import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PostsDisplay = ({ posts }) => {
    let postsTimeOfDay = assignTimeOfDay(posts)
    let postsGroupedByDay = groupByDay(postsTimeOfDay)
    let postsGroupedByWeek = groupByWeek(postsGroupedByDay)    //! move to homepage

    return (
        <Container>
            {postsGroupedByWeek.map((week, weekIndex) => (
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