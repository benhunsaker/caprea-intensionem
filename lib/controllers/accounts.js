'use strict';

var nconf = require('nconf'),
    sa = require('../services/accounts');

/*
 * @method list
 * @param req
 * @param res
 * To retrieve all accounts
 */
module.exports.list = function (req, res) {
  sa.getAll({}, function (err, body) {
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
 * To create a new account
 */
module.exports.create = function (req, res) {
  var options = {
        body: req.body
      };

  sa.create(options, function (err, user) {
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
 * To retrieve ONE account
 */
module.exports.get_by_id = function (req, res) {
  var options = {
    id: req.params.learn_to_id
  };

  sa.get_by_id(options, function (err, body) {
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
 * To update ONE account
 */
module.exports.update = function (req, res, next) {
  var options = {
    id: req.params.learn_to_id,
    body: req.body
  };

  sa.update(options, function(err, event){
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
 * To delete ONE account
 */
module.exports.delete = function (req, res, next) {
    sa.delete({ id: req.params.learn_to_id }, function(err, user){
      if (err){
        //log event
        res.status(500).send(err);
        return;
      }
      res.status(200).json(user);
      next();
    });
}
