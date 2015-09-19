var module = angular.module('childCare');

module.controller('HomeCtrl', [ '$scope', '$http', function($scope, $http){
  var vm = this;

  vm.submit = function () {
    $http
      .post('/childcare', vm.schedule)
      .success(function(data) {
        console.log(data);
        // add a thank you message
      });
  };

  $scope.tagline = 'Stay focused and never give up.';

}]);
