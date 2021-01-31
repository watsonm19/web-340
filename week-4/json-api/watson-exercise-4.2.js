/*
===============================================
; Title: Exercise 4.2 - HTTP Status Codes
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Mark Watson
; Description: This application shows how to return JSON with a Node.js server.
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
// initializes the app
const app = express();

/**
 * returns a JSON object
*/
app.get('/customer/:id', function(req, res) {
  // stores value of :id in url
  const id = parseInt(req.params.id, 10);

  // JSON data
  res.json({
    firstName: 'Mark',
    lastName: 'Watson',
    favColors: ['Light Blue', 'Red'],
    customerId: id
  })
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function(){
  console.log('Server is live on PORT 8080');
});
