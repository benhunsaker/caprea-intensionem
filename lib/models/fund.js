'use strict';

var mongoose = require('mongoose'),
    sanitize = require('sanitize-html'),
    ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
	state: String,
	description: String,
	goal: Number
});

//Pre-save hook
schema.pre('save', function(next){
  this.name = this.name ? sanitize(this.name).trim() : null;
  next();
});

// Register model
module.exports = mongoose.model('fund', schema);
