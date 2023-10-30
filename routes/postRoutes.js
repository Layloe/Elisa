const express = require('express')
const router = express.Router()
// const ticketlist = require('../models/ticketlist')
// const homeController = require('../controllers/home')
const postController = require('../controllers/postController')

//create 
router.post('/new', (req,res) => {
     postController.createPost(req, res)
} )

router.delete('/posts/:id', postController.deleteTicket) //? try '/posts/:id'
router.put('/:id', postController.updateTicket)  //? Changed to delete and put
  
module.exports = router