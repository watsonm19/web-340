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
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');

// import schema
const Employee = require('./models/employee');

// setup csrf protection
const csrfProtection = csrf({cookie: true});

// connect to MongoDB Atlas
const mongoDB = 'mongodb+srv://admin:admin@ems-cluster.0eims.mongodb.net/mark-buwebdev?retryWrites=true&w=majority';
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

// use statements
app.use(logger('short'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet.xssFilter());
app.use(cookieParser());
app.use(csrfProtection);
/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
*/
app.use(function(req, res, next) {
  const token = req.csrfToken();
  res.cookie('XRSF-TOKEN', token);
  res.locals.csrfToken = token;
});

// set.statements
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

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

app.post('/process', function(req, res) {
  if(!req.body.firstName && !req.body.lastName) {
    res.status(400).send('New employees must enter a full name');
    return
  }

  const employeeFirstName = req.body.firstName;
  const employeeLastName = req.body.lastName;
  console.log('adding ' + employeeFirstName + ' ' + employeeLastName);

  let employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName
  })

  employee.save(function(err) {
    if(err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeFirstName + ' ' + employeeLastName+ ' saved successfully!');
    }
  })
})

// SERVER

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(8080, function() {
  console.log('App is listening on PORT 8080');
});
