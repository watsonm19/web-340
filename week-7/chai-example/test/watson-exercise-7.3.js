/*
============================================
; Title:  Exercise 7.3 - Mocha and Chai
; Author: Professor Krasso
; Date:   20 February 2021
; Description: This demonstrates how to create a Chai test.
;===========================================
*/

// imports required modules
const fruits = require('../watson-fruits');
const chai = require('chai');
const assert = chai.assert;

// unit test function
describe('fruits', function() {
  it('should return an array of fruits', function() {
    const f = fruits('Apple,Orange,Mango');

    assert(Array.isArray(f));
  });
});
