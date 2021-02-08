/*
===============================================
; Title: Exercise 5.2 - EJS Templates
; Author: Professor Krasso
; Date: 07 February 2021
; Modified By: Mark Watson
; Description: This demonstrates EJS if..else..render operations.
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
const path = require('path');
// initializes the app
const app = express();

// the views are in the "views" directory
app.set('views', path.resolve(__dirname, 'views'));
// use the EJS view engine
app.set('view engine', 'ejs');

// array - list of people
const people = [
  'Darlington',
  'Diego',
  'Fanendo',
  'Rodney'
]

/**
 * returns the index.ejs page
*/
app.get('/', function(req, res) {
  res.render('index', {
    people: people
  })
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log('App listening on PORT 8080');
});
