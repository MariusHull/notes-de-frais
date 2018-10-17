var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  currency: String,
  user: String,
  userName: String,
  moderator: String,
  moderatorName: String,
  date: String,
  status: String,
  detail: String
});

module.exports = mongoose.model('Note', NoteSchema);