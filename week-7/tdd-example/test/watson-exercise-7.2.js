/*
============================================
; Title:  Exercise 7.2 - TDD Example
; Author: Professor Krasso
; Date:   20 February 2021
; Description: This shows how to create a TDD unit test.
;===========================================
*/

const assert = require('assert');

describe('String#split', function() {
  it('should return an array of fruits', function() {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});
