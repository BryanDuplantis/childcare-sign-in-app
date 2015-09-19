var Schedule = require("../models/childcare");


// exports.<function_name>
// This will allow you to use require to import a file with multiple function attached

exports.addSchedule = function(req, res) {
  var schedule = new Schedule(req.body);
  console.log(typeof req.body);
  console.log(schedule);
};

exports.deleteSchedule = function(req, res) {

};



