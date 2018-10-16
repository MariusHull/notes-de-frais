var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

/* GET users listing. */



router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

module.exports = router;
