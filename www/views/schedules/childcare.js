var module = angular.module('childCare');

module.controller('HomeCtrl', [ '$scope', '$http', function($scope, $http){
  var vm = this;

  vm.submit = function () {
    $http
      .post('/schedules', vm.schedule)
      .success(function(data) {
        console.log(data);
        toastr.success('Successfully Checked In!');
      });
  };

  $scope.tagline = 'Stay focused and never give up.';

}]);
