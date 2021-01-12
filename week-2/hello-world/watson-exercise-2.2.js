/*
===================================================
; Title:        Exercise 2.2 - Hello World with Express
; Author:       Professor Krasso
; Date:         12 January 2021
; Modified By:  Mark Watson
; Description:  Creates a new server with express and listens on port 8080.
;==================================================
*/

const express = require('express');
const http = require('http');
const app = express();

app.use(function(req, res) {
  console.log(`In comes a request to: ${req.url}`);

  res.end('Hello World');
})

http.createServer(app).listen(8080);
