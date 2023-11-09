const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController.js');

// Fetch all posts

// router.get('/', testController.getAllPosts)
router
    .route('/')
    .get(testController.getAllPosts)

// Create a new post
router
    .route('/posts/new')
    .post(testController.createPost)


// Get a specific post by ID
router
    .route('/posts/:id')
    .get(testController.getPostById)                  

// Update a post by ID
router
    .route('/posts/:id')
    .post(testController.updatePost)

// Delete a post by ID
router
    .route('/posts/:id')
    .post(testController.deletePostById);

module.exports = router;
