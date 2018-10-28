var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

/* GET all users */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET single user by id */
router.get('/:_id', function(req, res, next) {
  User.findById(req.params._id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET Users with defined fields */
router.get('/getUsersWithFields/:name/:_id/:accountype', function(req, res, next) {
  User.find({name: req.params.name}, {accountType: req.params.accountType}, {_id: req.params._id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET Users with defined fields */
router.get('/getAccMans/:type', function(req, res, next) {
  User.find({accountType: req.params.type}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE user */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
