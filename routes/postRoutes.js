const express = require('express')
const router = express.Router()
// const ticketlist = require('../models/ticketlist')
// const homeController = require('../controllers/home')
const postController = require('../controllers/postController')

create 
router.post('/new', (req,res) => {
     postController.createPost(req, res)
} )

router.post('/posts/:id', (req,res) => { //? try '/posts/:id'
     postController.deleteTicket(req,res)
})


router.post('/:id', (req,res) => {  //? Changed to delete and put
     postController.updateTicket(req,res)
})

// // Create a new post
router.post('/posts', postController.createPost)

// // Get all posts
router.get('/posts', postController.getAllPosts)

// // Get a specific post by ID
router.post('/posts/:id', postController.getPostById)

// // Delete a post by ID
router.delete('/post/:id', postController.deletePostById)

// // Update a post by ID
router.put('/posts/:id', postController.updatePost)


router.get('/', postController.getIndex);

  
  
module.exports = router