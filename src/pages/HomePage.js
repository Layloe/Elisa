import React, { useState, useEffect } from "react";
import axios from 'axios'
import { getDayOfWeek, getTimeOfDay, assignDayOfWeek, assignTimeOfDay, groupByDay, groupByWeek } from './helperFunctions'
import PostsDisplay from './PostsDisplay'
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap'



const HomePage = () => {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const res = await axios.get(`http://localhost:2121/posts`) 

            console.log('DB Response:', res.data)
            // setPosts(res.data)  
            // console.log('Posts state:', posts)

            const postsTimeOfDay = assignTimeOfDay(res.data)
            const postsGroupedByDay = groupByDay(postsTimeOfDay)
            const postsGroupedByWeek = groupByWeek(postsGroupedByDay)

            const completeWeeks = postsGroupedByWeek.map(week => {
                const fullWeek = Array(7).fill(null)
                week.forEach(day => {
                    const dayIndex = new Date(day[0].date).getDay()
                    fullWeek[dayIndex] = day
                })
                return fullWeek
            })
            setPosts(completeWeeks)
            
            
        } catch (error) {
            console.error('Error fetching posts:', error);
          }
        }  
        
        fetchPosts()
        console.log('Fetching posts...', posts)
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
    const handleLogout = async () => {
    try {
        await axios.get('http://localhost:2121/logout', {withCredentials: true})
    } catch (error) {
        console.error('Logout failed:', error)
    }
}

    return(
      <div>
        <PostsDisplay
          posts={posts}
          onDelete={handleDelete}
          onLogout={handleLogout}
        />
      </div>
    )

}

export default HomePage


