var module = angular.module('childCare', ['ui.router']);

module.config(function ($stateProvider, $urlRouterProvider) {
  // for any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/childcare/childcare.html",
      controller: "HomeCtrl",
      controllerAs: "vm"
    })

    // calendar
    .state('calendar', {
      url: "/calendar",
      templateUrl: "/views/calendar/calendar.html",
      controller: "CalendarCtrl"
    });
});


