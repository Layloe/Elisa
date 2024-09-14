import React, { useState, useEffect } from "react";
import axios from 'axios'
import { getDayOfWeek, getTimeOfDay, assignDayOfWeek, assignTimeOfDay, groupByDay, groupByWeek } from './helperFunctions'
import PostsDisplay from './PostsDisplay'
import BloodPressureTracker from "./BloodPressureTracker";
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
            console.log('Posts after assignTimeOfDay:', postsTimeOfDay)
            const postsGroupedByDay = groupByDay(postsTimeOfDay)
            console.log('Posts after groupByDay:', postsGroupedByDay)
            const postsGroupedByWeek = groupByWeek(postsGroupedByDay)
            console.log('Posts after groupByWeek:', postsGroupedByWeek)

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
        {console.log('rendering posts:', posts)}
        {posts && posts.length > 0 && (
        <BloodPressureTracker data={posts} onDelete={handleDelete} />
        )}
        <PostsDisplay
          posts={posts}
          onLogout={handleLogout}
        />
      </div>
    )

}

export default HomePage


