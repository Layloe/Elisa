import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const RegisterPage = ({onRegister}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:2121/register',
             { username, password },
             { withCredentials: true }
            )
            onRegister(res.data)

        } catch (error) {
            console.error('Registration failed:', error)
        }
    }

    return(
        <Container className="mt-4">
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choose a password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">Register</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);
};
//         <form>
//             <div>
//                 <label>Username:</label>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Sign Up</button>
//         </form>
//     )
// } 

export default RegisterPage