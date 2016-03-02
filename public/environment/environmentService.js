angular.module('success-chart');

  app.service('EnvironmentService', function($window){
  	this.getEnv = function(){
  		return $window.env;
  	}

    this.saveUsername = function(username) {
    	$window.localStorage.setItem('username', username)
    }

    this.getUsername = function(username){
    	return $window.localStorage.getItem('username')
    }



  });
