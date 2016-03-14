'use strict';

var mongoose = require('mongoose'),
    sanitize = require('sanitize-html'),
    ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
  name: String,
  email: String,
  skill: String,
  solutions: Array
});

//Pre-save hook
schema.pre('save', function(next){
  this.name = this.name ? sanitize(this.name).trim() : null;
  this.email = this.email ? sanitize(this.email).trim() : null;
  this.skill = this.skill ? sanitize(this.skill).trim() : null;
  this.solutions = this.solutions ? sanitize(this.solutions).trim() : null;
  next();
});

// Register model
module.exports = mongoose.model('user', schema);
