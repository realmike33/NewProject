'use strict';

angular.module('newCalendarApp')
  .controller('CalendarCtrl', function($scope) {
    $scope.template = 'calendar',
    $scope.myDate = '',
    $scope.todos = [],
    $scope.addToDo = function(todo) {
      $scope.todos.push({todo:todo, date: $scope.myDate});
      $scope.todo = ''; //makes the date and todo box return back to empty after adding
      $scope.myDate = '';
    };
  });