'use strict';
var express = require('express'),
    router = express.Router(),
    funds = require("../../controllers/funds.js");

/*** teams ***/
router.route('/funds')
  .get(funds.list)
  .post(funds.create);
router.route('/funds/:fund_id')
  .get(funds.get_by_id)
  .put(funds.update)
  .post(function () { next(new Error('not implemented')); })
  .delete(funds.delete);

module.exports = router;
