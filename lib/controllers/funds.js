'use strict';

var nconf = require('nconf'),
    sf = require('../services/funds');

/*
 * @method list
 * @param req
 * @param res
 * To retrieve all funds
 */
module.exports.list = function (req, res) {
  sf.getAll({}, function (err, body) {
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
 * To create a new funds
 */
module.exports.create = function (req, res) {
  var options = {
        body: req.body
      };

  sf.create(options, function (err, user) {
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
    id: req.params.fund_id
  };

  sf.get_by_id(options, function (err, body) {
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
 * To update ONE fund
 */
module.exports.update = function (req, res, next) {
  var options = {
    id: req.params.fund_id,
    body: req.body
  };

  sf.update(options, function(err, event){
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
  sf.delete({ id: req.params.fund_id }, function(err, user){
    if (err){
      //log event
      res.status(500).send(err);
      return;
    }
    res.status(200).json(user);
    next();
  });
}
