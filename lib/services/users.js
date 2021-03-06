'use strict';

var models = require('../models'),
    _ = require('lodash');

var Users = function(){
  this.model = models.user;
};

Users.prototype.getAll = function(options, cb) {
  var body = {
    total: 0,
    results: []
  };

  this.model
    .find()
    .exec(function(err, docs) {
      if (err) {
        cb(err, null);
        return;
      }
      body.total = docs.length;
      body.results = docs;

      cb(null, body);
    });
};

Users.prototype.create = function (options, cb) {
  console.log(options.body);
  new this.model(options.body).save(cb);
};

Users.prototype.get_by_id = function (options, cb) {
  // if (!cUtil.check_objectId(options.id)){
  //   cb(null, null);
  //   return;
  // }

  // if (options.unpopulated) {
  //   this.model.findById(options.id).exec(cb);
  // } else {
  //   this.model
  //     .findById(options.id)
  //     .populate('Group')
  //     .populate('Owners')
  //     .populate('Going')
  //     .exec(cb);
  // }
  this.model.findById(options.id).exec(cb);
};

Users.prototype.update = function (options, cb) {
  this.model.findById(options.id, function(err, model) {
    if (err) {
      cb(err, model);
      return;
    }
    console.log(model);
    _.assign(model, options.body);
    model.save(function (err, doc) {
      if (err) {
        cb(err, doc);
        return;
      }
      this.get_by_id({id: doc._id}, cb);
    }.bind(this));
  }.bind(this));
};

Users.prototype.delete = function (options, cb) {
  this.model.findByIdAndRemove(options.id, cb);
};

module.exports = new Users();
