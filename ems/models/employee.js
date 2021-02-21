/*
===============================================
; Title: Employee Schema - Mongoose
; Author: Mark Watson
; Date: 21 February 2021
; Description: This defines an employee schema for the EMS app.
===============================================
*/

// import mongoose module
const mongoose = require('mongoose');
// maps Schema to mongoose
const Schema = mongoose.Schema;

// defines employee schema
const employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// reference to employee schema
const Employee = mongoose.model('Employee', employeeSchema);

// exports schema for use
module.exports = Employee;
