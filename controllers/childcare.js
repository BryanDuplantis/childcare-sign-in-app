var Schedule = require("../models/schedule");


// exports.<function_name>
// This will allow you to use require to import a file with multiple functions attached

exports.addSchedule = function(req, res) {
  var schedule = new Schedule(req.body);
  //console.log(typeof req.body);
  //console.log(schedule);

  schedule.save(function (err, schedule) {
    if (err) return console.error(err);

    Schedule.find(function (err, users) {
      if (err) return console.error(err);
      console.log(users);
      res.send(users);
    });

  })

};

exports.getSchedules = function(req, res) {
  Schedule.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
    res.send(users);
  });
};

exports.deleteSchedule = function(req, res) {

};

exports.getSchedule = function(req, res) {
  // 1. Send req.body.date to mongoose using findOne
  // 2. Return that data using res.send
};



