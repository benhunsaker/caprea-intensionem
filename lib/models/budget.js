'use strict';

var mongoose = require('mongoose'),
    sanitize = require('sanitize-html'),
    ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
  name: String,
	domain: {
    start: Date,
    end: Date
  },
	deposits: [{
    description: String,
    amount: Number,
    due_date: Date,
    account_id: String
  }],
	envelopes: [{
    description: String,
    amount: Number,
    group: String,
    fr_bucket: {
      type: String,
      id: String
    },
    to_bucket: {
      type: String,
      id: String
    },
    due_date: Date,
    transactions: [{
      date: Date,
      state: String,
      user_id: String,
      description: String,
      amount: Number
    }]
  }]
});

//Pre-save hook
schema.pre('save', function(next){
  this.name = this.name ? sanitize(this.name).trim() : null;
  next();
});

// Register model
module.exports = mongoose.model('budget', schema);
