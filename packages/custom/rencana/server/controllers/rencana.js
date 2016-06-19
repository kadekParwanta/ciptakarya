'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Rencana = mongoose.model('Rencana'),
  _ = require('lodash');


/**
 * Find Rencana by id
 */
exports.Rencana = function(req, res, next, id) {
  Rencana.load(id, function(err, rencana) {
    if (err) return next(err);
    if (!rencana) return next(new Error('Failed to load rencana ' + id));
    req.rencana = rencana;
    next();
  });
};

/**
 * Create an rencana
 */
exports.create = function(req, res) {
  var rencana = new Rencana(req.body);
  rencana.user = req.user;

  rencana.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the rencana'
      });
    }
    res.json(rencana);

  });
};

/**
 * Update an rencana
 */
exports.update = function(req, res) {
  var rencana = req.rencana;

  rencana = _.extend(rencana, req.body);

  rencana.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the rencana'
      });
    }
    res.json(rencana);

  });
};

/**
 * Delete an rencana
 */
exports.destroy = function(req, res) {
  var rencana = req.rencana;

  rencana.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the rencana'
      });
    }
    res.json(rencana);

  });
};

/**
 * Show an rencana
 */
exports.show = function(req, res) {
  res.json(req.rencana);
};

/**
 * List of Rencanas
 */
exports.all = function(req, res) {
  Rencana.find().sort('-created').populate('user', 'name username').exec(function(err, rencanas) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the rencanas'
      });
    }
    res.json(rencanas);

  });
};
