/*
============================================
; Title:       Assignment 4.4 - cURL
; Author:      Professor Krasso, Professor Massoud
; Date:        31 January 2021
; Modified By: Mark Watson
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

// imports required modules
var express = require("express");
var http = require("http");
// initializes the app
var app = express();

/**
 * returns a string message confirming GET request
*/
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

/**
 * returns a string message confirming PUT request
*/
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

/**
 * returns a string message confirming POST request
*/
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

/**
 * returns a string message confirming DELETE request
*/
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

/**
 * creates server listening on port 8080
*/
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
