var childcare = require("../models/childcare")
var express = require('express');
var router = express.Router();

// Saves users to database

router.post('/', function (req, res) {
  var signIn = new SignIn({
  date: req.body.date,
  console.log(req.body.date);
  time: req.body.time,
  child1: req.body.child1,
  child2: req.body.child2,
  parent: req.body.parent
})

  collection.save(req.body, function(){
    res.redirect('/');
  });
});

module.exports = router;
