/*
============================================
; Title:  Assignment 1.5 - Hello World
; Author: Professor Krasso
; Date:   08 January 2021
; Modified By: Mark Watson
; Description: This shows how to create a vanilla Node.js server
;===========================================
*/


// start


// imports http module
const http = require('http');

/**
* Params: request, response
* Response: display custom text in the browser
* Description: handles incoming http requests
*/
function processRequest(req, res) {
  const body = 'Hello -from Mark\nThis message is served using Node.js!';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

// creates server
const s = http.createServer(processRequest);

// starts server listening on PORT 8080
s.listen(8080);


// end
