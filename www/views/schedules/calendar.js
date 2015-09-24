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
            $scope.dateToday = date.format('MM/DD/YYYY');
            $scope.today = $scope.todos.filter(function (event) {
              // moment object
              return event.date === date.format('MM/DD/YYYY');
            });

            $("#calendarModal").modal("show");
            $scope.$apply();
         }
      });
    };

    var populateCalendar = function(events) {
      events.forEach(function(e) {
        $('#calendar').fullCalendar('renderEvent', {
          title: e.child,
          start: new Date(e.date + ' ' + e.time)
        });
      });
    };
});
