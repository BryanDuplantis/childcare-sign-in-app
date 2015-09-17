// npm requires
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

require('./lib/mongod');

app.use(express.static('www'));

app.post('/childcare/data', function (req, res) {

  // Creates model
  userSchema.create({
    date : req.body.date,
    time : req.body.time,
    child1 : req.body.child1,
    child2 : req.body.child2,
    parent : req.body.parent,
    done : false
  }, function(err, userSchema) {
      if (err)
        res.send(err);
    userSchema.find(function(err, childcare) {
      if (err)
        res.send(err)
      // Returns data to front-end
        res.send({title: 'Jazzercise'});
    });
  });
});

// errors
app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

// pass 4 arguments to create an error handling middleware
app.use(function (req, res) {
  console.log('ERRRRRRRRRR', err.stack);
  res.status(500).send('My Bad');
});

var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});
