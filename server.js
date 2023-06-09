console.log('May the Node be with you');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const path = require('path');
const connectionString = process.env.DB_URI 

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('MongoDB connection successful');
    const db = client.db('crud');
    const crudCollection = db.collection('crudPractice');

    app.use(cors());
    app.use(express.static(path.join(__dirname,'client/build')));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json()); // parse JSON request bodies

    app.get('/quotes', (req, res) => {
      crudCollection
        .find()
        .toArray()
        .then(results => {
          res.setHeader('Content-Type', 'application/json')
          res.json(results);
          console.log('Received GET request to /quotes')
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        });
    });

    app.post('/quotes', (req, res) => {
      crudCollection
        .insertOne(req.body)
        .then(results => {
          console.log(body)
          res.setHeader('Content-Type', 'application/json')
          res.json({ message: 'Quote added successfully' }); // Return a JSON response
        })
        .catch(error => console.error(error));
    });

    // app.get('*', (req, res) => {
    //   res.setHeader('Content-Type', 'application/json')
    //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    //   console.log('Received GET request to /quotes')
    // });

    app.listen(process.env.PORT || 5000, function() {
      console.log('listening on port ' + (process.env.PORT || 5000));
    });
  })
  .catch(error => {
    console.log('MongoDB connection error:', error);
  });
