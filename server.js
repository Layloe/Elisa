const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()

//middleware
app.use(express.json())
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
    email: String,
    message: String,
    // dayOfWeek: assignDayOfWeek(value.date),
    // timeOfDay: getTimeOfDay(value.date),
    // groupByDay: groupByDay(),
    // groupByWeek: groupByWeek()

})

//Mongoose model for the form data
const FormData = mongoose.model('FormData', formDataSchema)

//route to handle form submissions
app.post('/form', async (req, res) => {
    try {
        //create a new FormData object from the request body
        const formData = new FormData(req.body)
        //Save form data to db
        await formData.save()
        res.status(200).send('Form submitted successfully')
    } catch (err) {
        console.error(err)
        res.status(500).send('Error submitting form')
    }
})



//Start server

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))