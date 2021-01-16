/*
============================================
; Title:       Exercise 2.3 - Routes
; Author:      Professor Krasso
; Date:        15 January 2021
; Modified By: Mark Watson
; Description: This simple web app demonstrates Express routing
;===========================================
*/

// imports express and http modules
const express = require('express');
const http = require('http');
const app = express();

// ROUTES

// home
app.get('/', function(request, response) {
  response.end('Welcome to the homepage!');
});
// about
app.get('/about', function(request, response) {
  response.end('Welcome to the about page!');
});
// contact
app.get('/contact', function(request, response) {
  response.end('Welcome to the contact page!');
});
// 404 error
app.use(function(request, response) {
  response.statusCode = 404;
  response.end('404!');
});

// creates and starts server listening on port 8080
http.createServer(app).listen(8080);
