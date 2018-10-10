'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/Note.js');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


//We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
/*const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://rushull.eu.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://localhost:3000',
    issuer: "rushull.eu.auth0.com", // e.g., you.auth0.com
    algorithms: ['RS256']
});*/

/* GET ALL NOTES */
router.get('/', function(req, res, next) {
  Note.find(function (err, notes) {
    if (err) return next(err);
    res.json(notes);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:_id', function(req, res, next) {
  Note.findById(req.params._id, function (err, post) {
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