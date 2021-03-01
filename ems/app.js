/*
===============================================
; Title: EMS - User Interface Development
; Author: Professor Krasso, Professor Massoud
; Date: 07 February 2021
; Modified By: Mark Watson
; Description: This application is intended to work as an employee management system.
===============================================
*/

// import required modules
const express = require('express');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

// import schema
const Employee = require('./models/employee');

// connect to MongoDB Atlas
const mongoDB = 'mongodb+srv://admin:admin@ems-cluster.0eims.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
// database connection error
db.on('error', console.error.bind(console, 'connection error:'));
// db connection success
db.once('open', function() {
  console.log('App is connected to Mongo Atlas: ems-cluster')
});

// initialize app
const app = express();

// the views are in the "views" directory
app.set('views', path.resolve(__dirname, 'views'));
// use the EJS view engine
app.set('view engine', 'ejs');

// use Morgan's short option for logging
app.use(logger('short'));
// use helmet's Content-Security-Policy in the HTTP header
app.use(helmet.xssFilter());

// model
const employee = new Employee({
  firstName: 'Mark',
  lastName: 'Watson'
})

// ROUTES

/**
 * returns the index.ejs page
*/
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Homepage'
  })
});

/**
 * returns the list.ejs page
*/
app.get('/employees-list', function(req, res) {
  res.render('list', {
    title: 'All Employees'
  });
});

/**
 * returns the view.ejs page
*/
app.get('/employee/:id', function(req, res) {
  id = req.params.id;
  res.render('view', {
    title: `Employee: ${id}`
  });
});

/**
 * returns the new.ejs page
*/
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'Add Employee'
  });
});

// SERVER

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log('App is listening on PORT 8080');
});
