var Schedule = require("../models/schedule");
var moment = require("moment");

exports.addSchedule = function(req, res) {
  console.log(typeof new Date(req.body.date));
  var today = moment(req.body.date).format("MM/DD/YYYY"); // Use date string
  var time = moment(req.body.time).format("h:mm a");
  req.body.date = today; // re-assign to req.body
  req.body.time = time; // re-assign to req.body
  var schedule = new Schedule(req.body); // Create new Schedule

  // not using ISO date because no comparisons being done

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
  Schedule.find({date: moment(req.body.date).format("MM/DD/YYYY")}, function (err, date) {
    console.log(err, date);
  if (err) return handleError(err);
  res.send(date);
})
};

// exports.deleteSchedule = function(req, res) {

// };



