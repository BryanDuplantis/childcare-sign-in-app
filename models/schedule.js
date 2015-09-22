var mongoose = require('mongoose');

var schedule = mongoose.model('Schedule', {
  date: String,
  time: String,
  child: String,
  parent: String,
  babysitter: String
});

module.exports = schedule;

