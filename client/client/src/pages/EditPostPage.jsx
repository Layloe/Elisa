import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'

const EditPostPage = () => {
    const [post, setPost] = useState({
        timeOfDay: '',
        bloodPressure: '',
        severity: '',
        assignedTo: '',
        status: '',
        date: ''
    })

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`http://localhost:2121/posts/${id}`)
                setPost(res.data)
            } catch (error) {
                console.error('Error fetching post', error);
            }
        }
        fetchPost()
    }, [id])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:2121/posts/${id}`, post )
            navigate('/')
        } catch (error) {
            console.error('Error updating post', error)
        }
    }

    return (

        <Container className="mt-4"> 
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Time of Day</Form.Label>
            <Form.Control type="text" name="timeOfDay" value={post.timeOfDay} onChange={handleChange} required />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control type="text" name="bloodPressure" value={post.bloodPressure} onChange={handleChange} required />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Severity</Form.Label>
            <Form.Control type="text" name="severity" value={post.severity} onChange={handleChange} required />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Assign To</Form.Label>
            <Form.Control type="text" rows={5} name="assignedTo" value={post.assignedTo} onChange={handleChange} required />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control type="text"  name="status" value={post.status} onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"  name="date" value={post.date} onChange={handleChange} required />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
        </Container>
      );
    
}

export default EditPostPage