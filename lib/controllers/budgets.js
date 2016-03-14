'use strict';

var nconf = require('nconf'),
    sb = require('../services/budgets');

/*
 * @method list
 * @param req
 * @param res
 * To retrieve all budget
 */
module.exports.list = function (req, res) {
  sb.getAll({}, function (err, body) {
    if (err) {
      //log failure
      res.status(500).send(err);
      return;
    }
    res.status(200).json(body);
  })
};

/*
 * @method create
 * @param req
 * @param res
 * To create a new budget
 */
module.exports.create = function (req, res) {
  var options = {
        body: req.body
      };

  sb.create(options, function (err, user) {
    if (err) {
      //log failure
      res.status(500).send(err);
      return;
    }
    res.status(200).json(user);
  })
};

/*
 * @method get_by_id
 * @param req
 * @param res
 * To retrieve ONE budget
 */
module.exports.get_by_id = function (req, res) {
  var options = {
    id: req.params.budget_id
  };

  sb.get_by_id(options, function (err, body) {
    if (err) {
      //log failure
      res.status(500).send(err);
      return;
    }
    if (!body) {
      res.status(404).json({});
    } else {
      res.status(200).json(body);
    }
  });
};

/*
 * @method update
 * @param req
 * @param res
 * To update ONE budget
 */
module.exports.update = function (req, res, next) {
  var options = {
    id: req.params.budget_id,
    body: req.body
  };

  sb.update(options, function(err, event){
    if (err){
      //log failure
      res.status(500).send(err);
      return;
    }
    res.status(200).json(event);

    next();
  });
};

/*
 * @method delete
 * @param req
 * @param res
 * To delete ONE budget
 */
module.exports.delete = function (req, res, next) {
  sb.delete({ id: req.params.budget_id }, function(err, user){
    if (err){
      //log event
      res.status(500).send(err);
      return;
    }
    res.status(200).json(user);
    next();
  });
}
