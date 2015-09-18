var module = angular.module('childCare', ['ui.router'])
  .controller('FormCtrl', [ '$scope', '$http', function($scope, $http){
    var vm = this;

    vm.submit = function () {
      $http
        .post('/childcare', {date: $scope.schedule.date, time: $scope.schedule.time, child1: $scope.child1, child2: $scope.child2, parent: $scope.parent})
        .success(function(data) {
          // add a thank you message
        });
  }}]);

module.config(function ($stateProvider, $urlRouterProvider) {
  // for any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/childcare/childcare.html",
      controller: "FormCtrl",
      controllerAs: "form"
    })

    // calendar
    .state('calendar', {
      url: "/calendar",
      templateUrl: "/views/calendar/calendar.html",
      controller: "CalendarCtrl"
    });
});


