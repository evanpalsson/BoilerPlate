var app = angular.module('nameOfApp', ['ngRoute'])

	app.config(function($routeProvider){

		$routeProvider
	  		.when('/', {
	  			templateUrl: '/index.html',
	  			controller: 'indexCtrl'	
	  	})
	});