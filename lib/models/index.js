'use strict';

var mongoose = require('mongoose'),
    nconf = require('nconf'),
    vcap = nconf.get('VCAP_SERVICES_bu');

var cloudant_info = vcap["cloudantNoSQLDB Dedicated"][0];

cloudant.connect(cloudant_info.credentials);

module.exports = {
  solution: require('./solution')
};
//learn_to: require('./learn_to'),
//user: require('./user'),
//series: require('./series')
