'use strict';
var express = require('express'),
    router = express.Router();

var normalizedPath = require("path").join(__dirname, "api");
require("fs").readdirSync(normalizedPath)
  .forEach(function(file) {
    router.use(require("./api/" + file));
  });

module.exports = router;
