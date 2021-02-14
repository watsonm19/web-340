/*
============================================
; Title:       Exercise 6.3 - Setting Up MongoDB
; Author:      Professor Krasso
; Date:        14 February 2021
; Modified By: Mark Watson
; Description: Demonstrates how to connect an application to MongoDB using mongoose.
;===========================================
*/

// imports required modules
const express = require('express');
const http = require('http');
const logger = require('morgan');
const mongoose = require('mongoose');

// MongoDB Atlas connection string
const mongoDB = 'mongodb+srv://admin:admin@ems-cluster.0eims.mongodb.net/ems?retryWrites=true&w=majority';
// connect to mongodb
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// connection status
const db = mongoose.connection;
// if there is a connection error
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
// if the connection if successful
db.once('open', function() {
  console.log('App is connected to Mongo Atlas: ems-cluster.');
});

// initialize app
const app = express();
// use Morgan's dev option for logging
app.use(logger('dev'));

/**
 * creates server listening on PORT 3000
*/
http.createServer(app).listen(3000, function() {
  console.log('App is listening on PORT 3000');
});

