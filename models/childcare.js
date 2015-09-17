// grab the Mongoose model
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/childcare');

var Customers = mongoose.model('customers', {
  date: Date,
  time: String,
  child1: String,
  child2: String,
  parent: String
});

module.exports = Customers;

