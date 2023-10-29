import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const res = await axios.get(`http://localhost:2121/`) 

            console.log('API Response:', res.data)
            setPosts(res.data.ticketList)
            
            
        } catch (error) {
            console.error('Error fetching posts:', error);
          }
        }  
        console.log('Fetching posts...')
        fetchPosts()
        // console.log(fetchPosts)
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:2121/posts/${id}`) //remove from DB
            console.log(`Deleted post with ID ${id}`)
            setPosts(posts.filter((post) => post._id !== id)) //remove item from state
        } catch (error) {
            console.error('Error deleting post', error)
        }
    }

    return(
        <Container>
        <Row>
        
        {posts.map((post) => (
            <Col md={4} className="mb-4" key={post._id}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Time of Day: {post.timeOfDay}</Card.Title>
                  <Card.Text>Blood Pressure: {post.bloodPressure}</Card.Text>
                  <Card.Text>Severity: {post.severity}</Card.Text>
                  <Card.Text>Assigned To: {post.assignedTo}</Card.Text>
                  <Card.Text>Status: {post.status}</Card.Text>
                  <Card.Text>Date: {post.date}</Card.Text>
                  <Link to={`/posts/${post._id}`}>
                    <Button variant="primary" className="mr-2">EditThis</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(post._id)}>Delete</Button>
                </Card.Body>
              </Card>
                
            </Col>

             ))}

            </Row>
        </Container>
    )
}

export default HomePage