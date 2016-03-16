'use strict';
var express = require('express'),
    router = express.Router(),
    budgets = require("../../controllers/budgets.js");

/*** teams ***/
router.route('/budget')
  .get(budgets.list)
  .post(budgets.create);
router.route('/budget/:budget_id')
  .get(budgets.get_by_id)
  .put(budgets.update)
  .post(function () { next(new Error('not implemented')); })
  .delete(budgets.delete);

module.exports = router;
