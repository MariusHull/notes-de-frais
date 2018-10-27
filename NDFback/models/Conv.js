var mongoose = require('mongoose');



var ConvSchema = new mongoose.Schema({
  idUser: String,
  idAccountManager: String,
  messages: {type: String},
  date: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Note', ConvSchema);