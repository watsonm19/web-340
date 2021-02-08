/*
===============================================
; Title: Exercise 5.3 - Pug Templates
; Author: Professor Krasso
; Date: 07 February 2021
; Modified By: Mark Watson
; Description: This demonstrates how to use the Pug view engine.
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
const pug = require('pug');
const path = require('path');
// initializes the app
const app = express();

// the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));
// use the Pug view engine
app.set("view engine", "pug");

/**
 * returns the index.ejs page
*/
app.get('/', function(req, res) {
  res.render('index', {
    message: `YAY! I'm using Pug for the first time!`
  })
})

/**
 * creates server listening on PORT 3000
*/
http.createServer(app).listen(3000, function() {
  console.log('App listening on PORT 3000');
});
