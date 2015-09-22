var module = angular.module('childCare');

module.controller('HomeCtrl', [ '$scope', '$http', function($scope, $http){

  $scope.submit = function () {
    var time = moment($scope.schedule.time).format("h:mm a");
    var schedule = angular.copy($scope.schedule);
    schedule.time = time;
    $http
      .post('/schedules', schedule)
      .success(function(data) {
        toastr.success('Successfully Checked In!');
      });
  };

  $scope.tagline = 'Stay focused and never give up.';

}]);

// angular.copy will copy an variable without two-way data binding it to the variable it's copying
