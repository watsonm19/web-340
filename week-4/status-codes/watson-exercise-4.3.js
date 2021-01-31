/*
===============================================
; Title: Exercise 4.3 - HTTP Status Codes
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Mark Watson
; Description: This application shows how to program status codes with a Node.js server.
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
// initializes the app
const app = express();

/**
 * returns a JSON error message for a 404 status code
*/
app.get('/not-found', function(req, res) {
  res.status(404);

  res.json({
    error: 'Sorry! Page not found.'
  })
});

/**
 * returns a JSON success message for a 200 status code
*/
app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    message: 'Page load was successful!'
  })
});

/**
 * returns a JSON error message for a 501 status code
*/
app.get('/not-implemented', function(req, res) {
  res.status(501);

  res.json({
    error: 'Oops! That page has not been implemented.'
  })
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function(){
  console.log('Server is live on PORT 8080');
});

