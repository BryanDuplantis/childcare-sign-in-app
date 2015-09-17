module.controller('CalendarCtrl', function($scope) {

  $scope.tagline = 'Where am I?';

  $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

  });

});
