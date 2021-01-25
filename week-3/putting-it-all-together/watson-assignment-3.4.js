/*
===============================================
; Title: Assignment 3.4 - Putting It All Together
; Author: Professor Krasso, Professor Massoud
; Date: 24 January 2021
; Modified By: Mark Watson
; Description: This app demonstrates more advanced routing with page navigation
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
app.set(path.resolve(__dirname, 'views'));
// tell express to use the EJS view engine
app.set('view engine', 'ejs');

// tell express to use morgan logger (short version)
app.use(logger('short'));

/**
 * returns the index.ejs page
*/
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Home Page'
  });
});

/**
 * returns the about.ejs page
*/
app.get('/about', function(req, res) {
  res.render('about', {
    message: 'About Page'
  });
});

/**
 * returns the contact.ejs page
*/
app.get('/contact', function(req, res) {
  res.render('contact', {
    message: "Contact Page"
  });
});

/**
 * returns the products.ejs page
*/
app.get('/products', function(req, res) {
  res.render('products', {
    message: 'Products Page'
  });
});

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function(){
  console.log('App is listening on PORT 8080');
})
