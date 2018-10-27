var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Conv = mongoose.model('Conv');


/* GET all messages */
router.get('/', function(req, res, next) {
  Conv.find(function (err, conv) {
    if (err) return next(err);
    res.json(conv.messages);
  });
});


/* POST a message */
router.put('/:idUser/:idAccMan', function(req, res, next) {
    Conv.findOneAndUpdate({idUser: req.params.idUser}, {idAccountManager: req.params.idAccMan}, req.body, function (err, conv) {
      if (err) return next(err);
      res.json(conv.messages);
    });
  });

  /* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Note.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });