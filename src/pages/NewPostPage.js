import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'

const NewPostPage = () => {

    const [post, setPost] = useState({          
          timeOfDay: '',
          bloodPressure: '',
          severity: '',
          assignedTo: '',
          status: 'Medication Not Taken'
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setPost({...post, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:2121/posts/new', post)
          console.log('Created new post successfully:', response.data)
          navigate('/')
        } catch (error) {
          console.error('Error creating post', error)
        }

    }


    return(
    <Container className="mt-4"> 
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Time of Day</Form.Label>
        <Form.Control type="text" name="timeOfDay" placeholder="Time of Day" onChange={handleChange} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Blood Pressure</Form.Label>
        <Form.Control type="text" name="bloodPressure" placeholder="Blood Pressure" onChange={handleChange} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Severity</Form.Label>
        <Form.Control type="text" name="severity" placeholder="Severity" onChange={handleChange} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Assign To</Form.Label>
        <Form.Control type="text" rows={5} name="assignTo" placeholder="Assign To" onChange={handleChange} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control type="text"  name="status" placeholder="Status" onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </Container>
  );
};

export default NewPostPage