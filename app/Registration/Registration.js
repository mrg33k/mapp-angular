'use strict';

var myAppRegistration = angular.module('myApp.Registration', ['ngRoute', 'ui.bootstrap','firebase']);


/*
Route Config 
*/
myAppRegistration.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Registration', {
    templateUrl: 'Registration/Registration.html',
    controller: 'RegistrationCtrl'
  });

}])


/*
Main Controller View 1
*/
.controller('RegistrationCtrl',['$scope', '$modal', '$log', function($scope,$modal) {

	$scope.openBeta = function(){
		var modalInstance = $modal.open({templateUrl: '../app/partials/modal.html',controller: 'ModalInstanceCtrl'});
	}

	$scope.openVideo = function(){
		var modalInstance2 = $modal.open({templateUrl: '../app/partials/video-modal.html',controller: 'VideoModalInstanceCtrl'});
	}

}]);



/*
Video Modal Instance Controller
*/
myAppRegistration.controller('VideoModalInstanceCtrl', function($scope,$modalInstance, $modal){
	
	$scope.openBeta = function(){
		var modalInstance = $modal.open({templateUrl: '../app/partials/modal.html', controller: 'ModalInstanceCtrl'});
	}

	$scope.cancel = function(){
		$modalInstance.close();
	}

});



/*
Modal Instance Controller
*/
myAppRegistration.controller('ModalInstanceCtrl', function($scope,$modalInstance){

	$scope.signUp = function(){
		$modalInstance.close();
	}


	$scope.cancel = function(){
		$modalInstance.close();
	}

});



/*
Form Controller
*/
myAppRegistration.controller('ModalFormCtrl', function($scope, $firebaseObject,$firebaseAuth){

	var ref = new Firebase("https://blistering-inferno-1744.firebaseio.com/");
	var syncObject = $firebaseObject(ref);
	var auth = $firebaseAuth(ref);

	$scope.signUp= function(){
			var name = $scope.user.name;
			var email = $scope.user.email;
            var password = $scope.user.password;

            if (email && password){
            	
                auth.$createUser({

                	email: email,
                	password: password

                })
                    .then(function() {
                        // do things if success
                        $scope.$parent.cancel();
                    }, function(error) {
                        // do things if failure
                        console.log(error);
                        $scope.error = error;
                    });
		}

	}

});