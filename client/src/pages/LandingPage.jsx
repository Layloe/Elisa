import React from "react";
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'


const LandingPage = () => {
    return (
        <Container className="mt-4 text-center">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome to the Elisa App</Card.Title>
                            <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                            <Link to="/register" className="btn btn-danger mx-2">Register</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage