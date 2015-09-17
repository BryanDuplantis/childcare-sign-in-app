var Childcare = require("../models/childcare");
var express = require('express');
var router = express.Router();

// Saves users to database

router.post('/new', function (req, res){
  var customers = new Customers({
    date : req.body.date,
    time : req.body.time,
    child1 : req.body.child1,
    child2 : req.body.child2,
    parent : req.body.parent
  });

checkin.save(function (err, data) {
  var id = data._id
  if (err) throw err;
  res.redirect('/new' + id);
  });
});

module.exports = router;
