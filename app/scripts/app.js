'use strict';


angular.module('newCalendarApp', [
  'ngRoute',
  'ui.date',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
