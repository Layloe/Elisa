const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController.js');

// Fetch all posts

router
    .route('/')
    .get(testController.getAllPosts)

// Create a new post
router
    .route('/new')
    .post(testController.createPost)


// Get a specific post by ID
router
    .route('/:id')
    .get(testController.getPostById)                  

// Update a post by ID
router
    .route('/:id')
    .post(testController.updatePost)

// Delete a post by ID
router
    .route('/:id')
    .delete(testController.deletePostById)

module.exports = router;
