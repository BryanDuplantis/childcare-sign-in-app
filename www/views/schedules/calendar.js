module.controller('CalendarCtrl', function($scope, $http) {

   $http.get('/schedules')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


  $scope.tagline = 'The greatest pleasure in life is doing what people say you cannot do.';

  $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      dayClick: function(date, jsEvent, view) {

        $("#calendarModal").modal("show");
        $scope.todos.

     }
    });
  });
});


