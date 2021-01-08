/*
============================================
; Title:  Exercise 1.3 - Modules
; Author: Professor Krasso
; Date:   06 January 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to parse a Node.js URL
;===========================================
*/

// imports node "url" library
const url = require("url");

// variable
const parsedURL = url.parse("https://www.examplefoodsite.com/search?food=burger");

// output - pieces of the parsed URL string
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
