const express = require('express')
const router = express.Router()
// const ticketlist = require('../models/ticketlist')
// const homeController = require('../controllers/home')
const postController = require('../controllers/postController')


router.get('/posts', (req,res) => {
     postController.getAllPosts(req,res)
})     
// create 
router.post('/posts/new', (req,res) => {
     postController.createPost(req, res)
} )

router.delete('/posts/:id', (req,res) => {     //? changed deleteTicket(req,res) to deleteById(req,res)
     postController.deletePostById(req,res)
})


router.post('/:id', (req,res) => {           //? changed updateTicket(req,res) to getPostById(req,res)
     postController.getPostById(req,res)
})


router.post('/posts/:id', (req,res) => {
     postController.updatePost(req,res)
})


// router.post('/posts', postController.createPost);
// router.get('/posts', postController.getAllPosts);
// router.post('/posts/:id', postController.getPostById);
// router.delete('/post/:id', postController.deletePostById);
// router.post('/posts/:id', postController.updatePost);


// // Create a new post
// router.post('/posts', postController.createPost)

// // Get all posts
// router.get('/posts', postController.getAllPosts)

// // Get a specific post by ID
// router.post('/posts/:id', postController.getPostById)

// // Delete a post by ID
// router.delete('/post/:id', postController.deletePostById)

// // Update a post by ID



// router.get('/', postController.getIndex);

  
  
module.exports = router