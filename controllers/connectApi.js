// import axios from "axios"
const axios = require('axios')
const TicketList = require('../models/ticketlist')


const connectDB = 'http://localhost:2121'

exports.createPost = async (req, res) => {
  try {
    const newPost = new TicketList(req.body);
    const savedPost = await newPost.save();

   
    const response = await axios.post(`${connectDB}/posts/new`, newPost);

    res.status(201).json(savedPost)
    
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




// const connectMongoDB = 'http://localhost:2121/posts' 

// const createInstance = axios.create({
//     connectMongoDB,
// })

// const ticketList = require('../models/ticketlist');




// exports.createPost = async (req, res) => {
//     try {
//         const newPost = new ticketList(req.body);
//         const savedPost = await newPost.save();
//         res.status(201).json(savedPost);
//     } catch (error) {
//         console.error('Error creating a new post:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


//  const createPost = async (postData) => {
//     try {
//         const response = await axios.createInstance(`${connectMongoDB}/posts`, postData) 
//     } catch (error) {
//         throw error
//     }
// }



const CreateTicket = async (res, req) => {
    try {
        const newTicket = new TicketList(req.body)
        const savedTicket = await newTicket.save()
        res.status(201).json(savedTicket)
    } catch (error) {
        res.status(500).json({ error: 'Error creating ticket'})
    }
}

module.exports = {
    // createPost,
    CreateTicket,
}