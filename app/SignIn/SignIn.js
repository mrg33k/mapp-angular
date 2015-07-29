'use strict';

var SignIn = angular.module('myApp.SignIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SignIn', {
    templateUrl: 'SignIn/SignIn.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', [function($scope) {

}]);