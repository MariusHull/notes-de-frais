'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/Note.js');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');




/* GET ALL NOTES */
router.get('/', function(req, res, next) {
  Note.find(function (err, notes) {
    if (err) return next(err);
    res.json(notes);
  });
});

/* GET SINGLE NOTE BY ID */
router.get('/:_id', function(req, res, next) {
  Note.findById(req.params._id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/getUserNotes/:userId', function(req, res, next) {
  Note.find({user: req.params.userId}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Note.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  Note.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Note.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;