'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.bootstrap',
  'bhResponsiveImages'
]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'view1/view1.html',
				controller: 'View1Ctrl'
		});
	}]);

