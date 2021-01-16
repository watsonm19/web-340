/*
===================================================
; Title: Assignment 2.4 - EJS Views
; Authors: Professor Krasso, Professor Massoud
; Date: 16 January 2021
; Modified By: Mark Watson
; Description: This web app demonstrates a Node.js server using Express with EJS
===================================================
*/

// imports required modules
const express = require('express');
const http = require('http');
const path = require('path');
// initializes the app
const app = express();

// tells express views are in 'views' directory
app.set('views', path.resolve(__dirname, 'views'));
// tells express to set the EJS view engine
app.set('view engine', 'ejs');

// ROUTES

/**
 * returns the index.ejs page
*/
app.get('/', function(request, response) {
  response.render('index', {
    firstName: 'Mark',
    lastName: 'Watson',
    address: '7707 Seven Street'
  });
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log('EJS-Views app started on PORT 8080.');
});
