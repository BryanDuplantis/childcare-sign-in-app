// grab the Mongoose model
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jazzercise');

var childcare = mongoose.model('childcare', {
  date: Date,
  time: String,
  child1: String,
  child2: String,
  parent: String
});

module.exports = childcare;

