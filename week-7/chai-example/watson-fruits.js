/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By: Mark Watson
; Description: This is a function used in a Chai test.
;===========================================
*/

/**
* Turns a string (that uses commas) into an array
* @param string
* @return array
*/
function fruits(str) {
  return str.split(',');
}

// exports function for use
module.exports = fruits;
