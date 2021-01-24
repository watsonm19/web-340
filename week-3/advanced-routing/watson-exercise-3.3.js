/*
===============================================
; Title: Exercise 3.3 - Advanced Routing
; Author: Professor Krasso
; Date: 21 January 2021
; Modified By: Mark Watson
; Description: This app demonstrates advanced routing
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

// tell express to use morgan logger (short version)
app.use(logger('short'));

/**
 * returns the index.ejs page
*/
app.get('/:employeeId', function(req, res) {
  //stores integer value from URL
  const employeeId = parseInt(req.params.employeeId, 10);

  res.render('index', {
    //makes employeeId value available in rendered html
    employeeId: employeeId
  });
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log('App is listening on PORT 8080');
});
