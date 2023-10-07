// import axios from "axios"
const axios = require('axios')
const TicketList = require('../models/ticketlist')


const connectMongoDB = 'http://localhost:2121/posts' 

const createInstance = axios.create({
    connectMongoDB,
})

 const createPost = async (postData) => {
    try {
        const response = await axios.createInstance(`${connectMongoDB}/posts`, postData) // Update this URL to match backend API endpoint
        return response.data
    } catch (error) {
        throw error
    }
}



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
    createPost,
    CreateTicket,
}