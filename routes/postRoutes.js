const express = require('express')
const router = express.Router()
const ticketlist = require('../models/ticketlist')
const homeController = require('../controllers/home')
const postController = require('../controllers/postController')



// get all posts
// router
//  .get('/', postController.getAllPosts)
// router 
//     .get("/posts",  async (req,res) => {
//         try {
//             const posts = await ticketlist.find()
//             res.json(posts)                           //test with send(posts)
//         } catch (err) {
//             res.status(500).send("Server Error")
//         }
//     })

// get one post
// router
//  .get('/:id', postController.getAllPostById)
// router
//     .get('/:id', async (req,res) => {
//         try {
//             const post = await ticketlist.findById(req.params.id)
//             if(!post) {
//                 return res.status(404).send('Post not found')
//             }
//             res.json(post)                                                  
//         } catch (err) {
//             res.status(500).send("Server Error")
//         }
// })

//create 
router.post('/new', (req,res) => {
     postController.createPost(req.res)
} )
// router
//     .post('/posts/new', postController.createPost , async (req, res) => {
//         try {
//             const newPost = new ticketlist(req.body)
//             const savePost = await newPost.save()
//             res.json(savePost)
//         } catch (err) {
//             res.status(500).send("Server Error")
//         }
//     })

// delete
// router
//  post.delete('/:id', postController.deletePostById)
// router
//     .delete('/:id', async (req, res) => {
//         try {
//             await ticketlist.findByIdAndDelete(req.params.id)
//             res.status(200).send('Post Deleted')
//         } catch (err) {
//             res.status(500).send("Server Error")
//         }
//     })

module.exports = router