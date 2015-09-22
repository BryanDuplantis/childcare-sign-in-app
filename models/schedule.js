// grab the Mongoose model
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jazzercise');

var schedule = mongoose.model('Schedule', {
  date: String,
  time: String,
  child1: String,
  child2: String,
  parent: String,
  babysitter: String
});

module.exports = schedule;

