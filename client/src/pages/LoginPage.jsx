import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap'

const LoginPage = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(handleSubmit)
        try {
            const res = await axios.post('http://localhost:2121/login', 

            { username, password },
            { withCredentials: true }
            )
            // onLogin(res.data).
            navigate('/posts')
            console.log('Login Successful')
            
        } catch (error) {
            console.error('Login failed:', error)  
        }
    }

    return (
        <Container className="mt-4">
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);
};


    // <Container className="mt-4"> 
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group>
    //     <Form.Label>Username</Form.Label>
    //     <Form.Control type="text" value={username} placeholder="Username" onChange={handleChange} required />
    //   </Form.Group>

    //   <Form.Group>
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" value={password} placeholder="Password" onChange={handleChange} required />
    //   </Form.Group>
    // <Button variant="primary" type="submit">
    //     Login
    // </Button>
    // </Form>
    // </Container>
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <label>Username:</label>
        //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        //     </div>
        //     <div>
        //         <label>Password:</label>
        //         <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     </div>
        //     <button type="submit">Login</button>

        // </form>
    


export default LoginPage
