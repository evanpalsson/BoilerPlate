var app = angular.module('nameOfApp', ['ui.router'])

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider
			.otherwise('/');
			
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/index.html',
	  			controller: 'indexCtrl'
			})
			// .state('home.statements', {
			// 	url: '/statements',
			// 	templateUrl: '/statements.html'
			// })
	});