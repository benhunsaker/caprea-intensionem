'use strict';
var express = require('express'),
    router = express.Router(),
    accounts = require("../../controllers/accounts.js");

/*** teams ***/
router.route('/accounts')
  .get(accounts.list)
  .post(accounts.create);
router.route('/accounts/:account_id')
  .get(accounts.get_by_id)
  .put(accounts.update)
  .post(function () { next(new Error('not implemented')); })
  .delete(accounts.delete);

module.exports = router;
