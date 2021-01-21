/*
===============================================
; Title: Exercise 3.2 - Logging
; Author: Professor Krasso
; Date: 21 January 2021
; Modified By: Mark Watson
; Description: This app shows how to setup the Morgan logger
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
// initializes the app
const app = express();

// tell express the views are in the "views" directory
app.set('views', path.resolve(__dirname, 'views'));
// tell express to use the EJS view engine
app.set('view engine', 'ejs');

// tell express to use morgan for logging
app.use(logger('short'));

/**
 * returns the index.ejs page
*/
app.get('/', function(request, response) {
  response.render('index', {
    message: 'Look in the terminal to see Morgan work!'
  });
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log("App is live on port 8080");
});
