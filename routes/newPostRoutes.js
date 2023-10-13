const express = require('express');
const router = express.Router();
const ticketlist = require('../models/ticketlist');
const postController = require('../controllers/connectApi.js');

router.post('/posts/new', postController.createPost)

module.exports = router