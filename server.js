//Declare Variables
const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 2121;
const mongoose = require("mongoose")
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const connectDB = require("./config/database");
//const TodoTask = require("./models/TodoTask");
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")
const User = require('./models/userModel')
const userRoutes= require('./routes/userRoutes')
const postRoutes = require('/routes/postRoutes')                      //?Testing here

require('dotenv').config({path: './config/.env'})//! Put in variables

connectDB()

//Set Middleware
// app.set("view engine", "ejs");
app.use(cors())
app.use(express.json()) //? testing diffrent angles 
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'this is Elisa',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//passing currentUser to all routes
app.use((req,res,next) => {
    res.locals.currentUser = req.user
    next()
})

// Set Routes
app.use('/', homeRoutes) //!Add names to routes
app.use('/posts', postRoutes)                     //? *testing this route
app.use('/edit', editRoutes)
app.use('/', userRoutes)

// //get all post
// app.get('/posts', async (req,res) => {
//     const posts = await Post.find()
//     res.send(posts)
// })

// //get one post
// app.get('/posts/:id', async (req,res) => {
//     const posts = await Post.findById(req.params.id)
//     res.send(posts)
// })

// //create new post
// app.post('/posts', async (req,res) => {
//     const newPost = new Post(req.body)
//     const savedPost = await newPost.save()
//     res.send(savedPost)
// })

// //delete post
// app.delete('/posts/:id', async (req,res) => {
//      await Post.findByIdAndDelete(req.params.id)
//     res.status(200).send('Post deleted')
// })





//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






