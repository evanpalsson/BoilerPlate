var app = angular.module('success-chart', ['firebase']);

	// Facebook login
	app.controller('loginCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

	    var ref = new Firebase("https://success-chart.firebaseio.com");
	    ref.authWithOAuthPopup("facebook", function(error, authData) {
	        if (error) {
	            console.log("Login Failed!", error);
	        } else {
	            console.log("Authenticated successfully with payload:", authData);
	        }
	    });

	    $scope.login = function() {
	    	
	    }

	}]);

