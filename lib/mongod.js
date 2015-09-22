var mongoose = require('mongoose');

var MONGODB_USER = process.env.MONGOLAB_USER || 'Jazzercise';
var MONGODB_PASSWORD = process.env.MONGOLAB_PASS || 'nLdTaICYLJrQ';
var DATABASE_URL = process.env.MONGODB_URL ||
  'mongodb://' +
  MONGODB_USER +
  ':' + MONGODB_PASSWORD +
  '@ds051523.mongolab.com:51523/childcare-sign-in-app';

mongoose.connect('mongodb://' + DATABASE_URL + '/jazzercise');

console.log('CONNECTED TO DATABASE: ' + DATABASE_URL);
