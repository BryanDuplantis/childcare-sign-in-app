// npm requires
var express     = require('express');
var app         = express();              // create app with Express
var bodyParser  = require('body-parser'); // Pull information from HTML POST

// require controllers
var childcare = require('./controllers/childcare');
var calendar  = require('./controllers/calendar');

app.use(express.static('www')); // set the static files location
app.use(bodyParser.urlencoded({'extended':'false'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes
app.post('/childcare', childcare.addSchedule);
// app.delete('/childcare/remove', childcare.deleteSchedule);
// app.get('/childcare/calendar', calendar.getSchedules);

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
