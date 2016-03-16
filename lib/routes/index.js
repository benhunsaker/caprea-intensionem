'use strict';
var pages = require('./pages'),
    api = require('./api');

module.exports.attach = function (app) {
  app.use('/api', api);
  app.use('/', pages);
};;
