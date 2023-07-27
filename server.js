//Declare Variables
const express = require("express");
const app = express();
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

require('dotenv').config({path: './config/.env'})//! Put in variables

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public', { type: 'text/css' }))
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

//Set Routes
app.use('/', homeRoutes) //!Add names to routes
app.use('/edit', editRoutes)
app.use('/', userRoutes)





//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






