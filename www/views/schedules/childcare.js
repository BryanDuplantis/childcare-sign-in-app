var module = angular.module('childCare');

module.controller('HomeCtrl', [ '$scope', '$http', function($scope, $http){
  $scope.opened = false;

  $scope.open = function($event) {
    $scope.opened = true;
  };

  $scope.submit = function () {

    $http
      .post('/schedules', $scope.schedule)
      .success(function(data) {
        toastr.success('Successfully Checked In!');
      });
  };

  $scope.tagline = 'Stay focused and never give up.';

}]);
