'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.Registration',
  'myApp.SignIn',
  'myApp.version',
  'ui.bootstrap',
  'bhResponsiveImages'
]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'Registration/Registration.html',
				controller: 'RegistrationCtrl'
		});
	}]);

