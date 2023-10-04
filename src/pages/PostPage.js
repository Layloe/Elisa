import React, { useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Card, Container } from 'react-bootstrap'

//! fit this to match the model                   
const PostPage = () => {
    const [post, setPost] = useState({ 
      timeOfDay: '',                        //?Changed, testing here
      bloodPressure: '',
      severity: '',
      assignedTo: '',
      status: 'Medication Not Taken',
    })

    const {id} = useParams()

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const res = await axios.get(`/posts/${id}`) //? changes routes, delete this after running
            setPost(res.data)
          } catch (error) {
            console.error('Error getting post', error)
          }

        }
        fetchPost()
    },[id])

    return(
        <Container className='mt-4'>
            <Card>
              <div style={{maxHeight: '500px', overflow: 'hidden'}}>
                <Card.Img className='img-fluid' variant='top' src={post.image} alt={post.title}></Card.Img> //! need to include this in the card body
              </div>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>By: {post.author}</Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
        </Container>
    )
}
export default PostPage