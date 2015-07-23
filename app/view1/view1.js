'use strict';

var myAppView1 = angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap','firebase']);


/*
Route Config 
*/
myAppView1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])


/*
Main Controller View 1
*/
.controller('View1Ctrl',['$scope', '$modal', '$log', function($scope,$modal) {

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
myAppView1.controller('VideoModalInstanceCtrl', function($scope,$modalInstance, $modal){
	
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
myAppView1.controller('ModalInstanceCtrl', function($scope,$modalInstance){

	$scope.ok = function(){
		$modalInstance.close();
	}


	$scope.cancel = function(){
		$modalInstance.close();
	}

});



/*
Form Controller
*/
myAppView1.controller('ModalFormCtrl', function($scope, $firebaseObject,$firebaseAuth){

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
                        console.log('User creation success');
                    }, function(error) {
                        // do things if failure
                        console.log(error);
                        $scope.error = error;
                    });
		}

	}

});