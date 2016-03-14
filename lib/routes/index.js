'use strict';
var pages = require('./pages'),
    api = require('./api');

module.exports.attach = function (app) {
  app.use('/', pages);
  app.use('/api', api);
};;
