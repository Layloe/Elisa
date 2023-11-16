import React, { useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap'


                  
const PostPage = () => {
    const [post, setPost] = useState({ 
      timeOfDay: '',                        
      bloodPressure: '',
      severity: '',
      assignedTo: '',
      status: 'Medication Taken',
      date: ''
    })

    const {id} = useParams()

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const res = await axios.get(`http://localhost:2121/posts/${id}`) 
            setPost(res.data.ticketList)    
          } catch (error) {
            console.error('Error getting post', error)
          }

        }
        fetchPost()
    }, [id])

    return(
        <Container className='mt-4'>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Time of Day: {post.timeOfDay}</Card.Title>
                  <Card.Text>Blood Pressure: {post.bloodPressure}</Card.Text>
                  <Card.Text>Severity: {post.severity}</Card.Text>
                  <Card.Text>Assigned To: {post.assignedTo}</Card.Text>
                  <Card.Text>Status: {post.status}</Card.Text>
                  <Card.Text>Date: {post.date}</Card.Text>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
    )
}
export default PostPage

