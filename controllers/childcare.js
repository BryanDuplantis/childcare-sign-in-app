var Schedule = require("../models/schedule");

exports.addSchedule = function(req, res) {
  console.log(typeof new Date(req.body.date));
  var today = new Date(req.body.date).toDateString(); // Use date string
  req.body.date = today; // re-assign to req.body
  var schedule = new Schedule(req.body); // Create new Schedule

  schedule.save(function (err, schedule) {
    if (err) return console.error(err);

    Schedule.find(function (err, users) {
      if (err) return console.error(err);
      //console.log(users);
      res.send(users);
    });
  })
};

exports.getSchedules = function(req, res) {
  Schedule.find(function (err, users) {
    if (err) return console.error(err);
    //console.log(users);
    res.send(users);
  });
};

exports.getSchedule = function(req, res) {
  console.log(new Date(req.body.date).toDateString());
  Schedule.find({date: new Date(req.body.date).toDateString()}, function (err, date) {
    console.log(err, date);
  if (err) return handleError(err);
  res.send(date);
})
};

// exports.deleteSchedule = function(req, res) {

// };



