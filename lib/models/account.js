'use strict';

var mongoose = require('mongoose'),
    sanitize = require('sanitize-html'),
    ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
  name: String,
  type: String,
  balance: Number,
  options: Object
});

//Pre-save hook
schema.pre('save', function(next){
  this.name = this.name ? sanitize(this.name).trim() : null;
  this.type = this.type ? sanitize(this.type).trim() : 'checking';
  next();
});

// Register model
module.exports = mongoose.model('account', schema);
