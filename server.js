//Declare Variables
const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 2121;
const mongoose = require("mongoose")
const session = require('express-session')
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
const connectDB = require("./config/database");
// const homeRoutes = require("./routes/home")
// const editRoutes = require("./routes/edit")
// const User = require('./models/userModel')
// const userRoutes= require('./routes/userRoutes')
// const postRoutes = require('./routes/postRoutes') 
const testRoutes = require('./routes/testRoutes')
                     

require('dotenv').config({path: './config/.env'})

connectDB()

//Set Middleware
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'this is Elisa',
    resave: false,
    saveUninitialized: false
}))

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new LocalStrategy(User.authenticate()))
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

//passing currentUser to all routes
// app.use((req,res,next) => {
//     res.locals.currentUser = req.user
//     next()
// })

// Set Routes
app.use('/posts', testRoutes) 
// app.use('/posts/new', testRoutes)                
// app.use('/posts/:id',testRoutes) //changed editRoutes for testing
// app.use('/', userRoutes)


//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






