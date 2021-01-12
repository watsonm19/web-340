/*
===================================================
; Title:        Exercise 2.2 - Hello World with Express
; Author:       Professor Krasso
; Date:         12 January 2021
; Modified By:  Mark Watson
; Description:  This application creates a new server with express and listens on port 8080.
;==================================================
*/

// imports express and http modules
const express = require('express');
const http = require('http');
const app = express();

// handles incoming http requests
app.use(function(req, res) {
  console.log(`In comes a request to: ${req.url}`);

  res.end('Hello World');
})

// creates and starts server listening on port 8080
http.createServer(app).listen(8080);
