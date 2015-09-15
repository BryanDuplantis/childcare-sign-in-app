var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

// Saves users to database

router.post('/new', function (req, res) {
  var collection = global.db.collection('childcareUsers');

  collection.save(req.body, function(){
    res.redirect('/childcare');
  });
});

module.exports = router;
