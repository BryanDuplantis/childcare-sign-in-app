module.controller('CalendarCtrl', function($scope) {

  $scope.tagline = 'The greatest pleasure in life is doing what people say you cannot do.';

  $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      dayClick: function(date, jsEvent, view) {

          // 1. Use $http.post to get a specific day
          // 2. Send the date you are looking for to Node server
          // 3. Open a modal with those dates

          // code here

        $("#calendarModal").modal("show");

          //$(this).css('background-color', 'lightblue');


     }
    });

  });

});

