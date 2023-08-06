const express = require('express')
const router = express.Router
const homeController = require('../controllers/home')


// get all posts
router
    .get('/', async (req,res) => {
        try {
            const posts = await ticketlist.find()
            res.send(posts)
        } catch (err) {
            res.status(500).send("Server Error")
        }
    })

// get one post
router
    .get('/id', async (req,res) => {
        try {
            const post = await ticketlist.findById(req.params.id)
            if(!post) {
                return res.status(404).send('Post not found')
            }
            res.send(post)
        } catch (err) {
            res.status(500).send("Server Error")
        }
})

// create new post
router
    .post('/', async (req, res) => {
        try {
            const newPost = new ticketlist(req.body)
            const savePost = await newPost.save()
            res.send(savePost)
        } catch (err) {
            res.status(500).send("Server Error")
        }
    })

// delete post
router
    .delete('/id', async (req, res) => {
        try {
            await ticketlist.findByIdAndDelete(req.params.id)
            res.status(200).send('Post Deleted')
        } catch (err) {
            res.status(500).send("Server Error")
        }
    })

module.exports = router