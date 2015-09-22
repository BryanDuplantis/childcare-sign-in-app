module.controller('CalendarCtrl', function($scope, $http) {
  $scope.tagline = 'The greatest pleasure in life is doing what people say you cannot do.';

   $http.get('/schedules')
        .success(function(data) {
            $scope.todos = data;
            renderCalendar();
            populateCalendar(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });



    var renderCalendar = function() {
      $('#calendar').fullCalendar({
        dayClick: function(date, jsEvent, view) {
          //alert('Clicked on: ' + date.add('days', '1'));

          $http.post('/schedule', {date: date.add('days', '1')})
            .success(function(data) {
              $scope.today = data;

              $("#calendarModal").modal("show");
            })
            .error(function(data) {
              console.log('Error: ' + data);
            });
         }
      });
    };

    var populateCalendar = function(events) {
      // 1. Loop through all events
      // 2. start = new Date(e.date)
      $('#calendar').fullCalendar('renderEvent', {
        title: 'number of children',
        start: new Date()
      });
    };


});


/*
FOR LOOP
var events = [{date: new Date()}, {date: new Date()}]

events.forEach(function(e){
  var date = new Date(e.date);
});
*/

