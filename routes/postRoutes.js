const express = require('express')
const router = express.Router()
const ticketlist = require('../models/ticketlist')
const homeController = require('../controllers/home')
const postController = require('../controllers/postController')

//create 
router.post('/new', (req) => {
     postController.createPost(req)
} )


module.exports = router