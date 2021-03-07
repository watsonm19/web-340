/*
===============================================
; Title: EMS - User Interface Development
; Author: Mark Watson
; Date: 07 February 2021
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
const mongoDB = 'mongodb+srv://admin:admin@ems-cluster.0eims.mongodb.net/ems?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('App is connected to MongoDB Atlas: ems/ems-cluster');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
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
  next();
});

// set statements
app.set('PORT', process.env.PORT || 8080);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTES

/**
 * returns the index.ejs page
*/
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home'
  })
});

/**
 * returns the list.ejs page
*/
app.get('/employees-list', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('list', {
        title: 'All Employees',
        employees: employees
      });
    }
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

/**
 * saves form data to MongoDB
 * redirects to the list.ejs page
*/
app.post('/process', function(req, res) {
  if(!req.body.firstName && !req.body.lastName) {
    res.status(400).send('New employees must enter a full name');
    return;
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

  res.redirect('/employees-list');
});

/**
 * returns the view.ejs page
 * renders a single employee's data
*/
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params.queryName;

  Employee.find({'firstName': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'Employee Details',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

// SERVER

/**
 * creates server listening on PORT 8080
*/
http.createServer(app).listen(app.get('PORT'), function() {
  console.log('App is listening on PORT' + app.get('PORT'));
});
