//var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();

// Saves users to database

router.post('/', function (req, res) {
  var signIn = new SignIn({
  date: req.body.date,
  classTime: req.body.classTime,
  childName: req.body.childName,
  parentName: req.body.parentName
})

  collection.save(req.body, function(){
    res.redirect('/');
  });
});

module.exports = router;
