'use strict';
var mongoose = require('mongoose')
  , util = require('util')
  , nconf = require('nconf');

var connection_string = util.format('mongodb://%s:%s/%s', nconf.get('mongo:host'), nconf.get('mongo:port'), nconf.get('mongo:db'));

mongoose.connect(connection_string, nconf.get('mongo:options'));

module.exports = {
  connection_string: connection_string,
  user: require('./user'),
  account: require('./account'),
  budget: require('./budget'),
  fund: require('./fund')
};
