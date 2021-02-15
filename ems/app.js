/*
===============================================
; Title: EMS - User Interface Development
; Author: Professor Krasso, Professor Massoud
; Date: 07 February 2021
; Modified By: Mark Watson
; Description:
===============================================
*/


const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Homepage'
  })
});

app.get('/employees-list', function(req, res) {
  res.render('list', {
    title: 'All Employees'
  });
});

app.get('/employee/:id', function(req, res) {
  id = req.params.id;
  res.render('view', {
    title: `Employee: ${id}`
  });
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'Add Employee'
  });
});

http.createServer(app).listen(8080, function() {
  console.log('App is listening on PORT 8080');
});
