
console.log('May the Node be with you')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const connectionString = process.env.DB_URI

MongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {
    console.log('MongoDB connection successful');
    const db = client.db('crud')
    const crudCollection = db.collection('crudPractice')

    app.use(bodyParser.urlencoded({extended: true}))


    app.get('/', (req, res) => {
      crudCollection.find().toArray()
        .then(results => {
          console.log(results)
        })
      res.sendFile(__dirname + '/index.html')
   })



   app.post('/quotes',(req,res) => {
    crudCollection.insertOne(req.body)
      .then(results => {
        console.log(results)
        res.redirect('/')
      })
      .catch(error => console.error(error))
    

 })


   app.listen(3000,function(){
    console.log('listening on 3000')
})

  }).catch((error) => {
    console.log('MongoDB connection error:', error);
  })




 
 
