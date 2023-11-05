const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController.js');

// Fetch all posts
router.get('/', testController.getAllPosts);
// router.get('/posts', testController.getAllPosts);  //? changed '/posts' to '/'

// Create a new post
router.post('/posts/new', testController.createPost);

// Delete a post by ID
router.delete('/posts/:id', testController.deletePostById);

// Get a specific post by ID
router.get('/posts/:id', testController.getPostById);                  

// Update a post by ID
router.post('/posts/:id', testController.updatePost);

module.exports = router;
