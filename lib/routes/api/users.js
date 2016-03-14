'use strict';
var express = require('express'),
    router = express.Router(),
    users = require("../../controllers/users.js");

/*** teams ***/
router.route('/users')
  .get(users.list)
  .post(users.create);
router.route('/users/:user_id')
  .get(users.get_by_id)
  .put(users.update)
  .post(function () { next(new Error('not implemented')); })
  .delete(users.delete);

module.exports = router;
