var module = angular.module('childCare', ['ui.router']);

module.config(function ($stateProvider, $urlRouterProvider) {
  // for any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/schedules/childcare.html",
      controller: "HomeCtrl"
    })

    // calendar
    .state('calendar', {
      url: "/calendar",
      templateUrl: "/views/schedules/calendar.html",
      controller: "CalendarCtrl"
    });
});


