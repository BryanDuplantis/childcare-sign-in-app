module.controller('CalendarCtrl', function($scope) {

  $scope.tagline = 'The greatest pleasure in life is doing what people say you cannot do.';

  $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

  });

});
