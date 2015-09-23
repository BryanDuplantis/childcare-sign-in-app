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
          // console.log(date.add('days', '1'))
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
      // 1. Loop through all events
      // 2. start = new Date(e.date)
      events.forEach(function(e) {
        $('#calendar').fullCalendar('renderEvent', {
          title: e.child,
          start: new Date(e.date + ' ' + e.time)
        });
      });
    };
});

// Angucomplete Alt

// $http.get('/schedules')
//         .success(function(data) {
//             $scope.todos = data;
//             renderCalendar();
//             populateCalendar(data);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });

// Copy to views/schedules/childcare.js
