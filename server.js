const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

//connect to DB

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

.then(() => console.log('MongoDB connection successful'))
.catch((err) => console.error(err))

//Mongoose schema for form data
const formDataSchema = new mongoose.Schema({
    name: String,
    cats: String,
    dogs: String
})

