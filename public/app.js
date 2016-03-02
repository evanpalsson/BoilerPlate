var app = angular.module('success-chart', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider
			.otherwise('/');
			
		$stateProvider
			.state('chart', {
				url: '/',
				templateUrl: 'views/chart.html'
			})
			// .state('login', {
			// 	url: '/login',
			// 	templateUrl: 'login/login.html',
			// 	controller: "loginCtrl"
			// });
	});

	console.log('app.js is working')

	// app.run(["$rootScope", "$state", function($rootScope, $state) {
	//     $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
	//         // We can catch the error thrown when the $requireAuth promise is rejected
	//         // and redirect the user back to the home page
	//         if (error === "AUTH_REQUIRED") {
	//             $state.go("home");
	//         }
	//     });
	// }]);

	// app.config(["$stateProvider", function($stateProvider, $urlRouterProvider) {

	// 	$urlRouterProvider
	//         .otherwise('/');

	//     $stateProvider
	//         .state("home", {
	//             // the rest is the same for ui-router and ngRoute...
	//             controller: "HomeCtrl",
	//             templateUrl: "views/home.html",
	//             resolve: {
	//                 // controller will not be loaded until $waitForAuth resolves
	//                 // Auth refers to our $firebaseAuth wrapper in the example above
	//                 "currentAuth": ["Auth", function(Auth) {
	//                     // $waitForAuth returns a promise so the resolve waits for it to complete
	//                     return Auth.$waitForAuth();
	//                 }]
	//             }
	//         })
	//         .state("account", {
	//             // the rest is the same for ui-router and ngRoute...
	//             controller: "AccountCtrl",
	//             templateUrl: "views/account.html",
	//             resolve: {
	//                 // controller will not be loaded until $requireAuth resolves
	//                 // Auth refers to our $firebaseAuth wrapper in the example above
	//                 "currentAuth": ["Auth", function(Auth) {
	//                     // $requireAuth returns a promise so the resolve waits for it to complete
	//                     // If the promise is rejected, it will throw a $stateChangeError (see above)
	//                     return Auth.$requireAuth();
	//                 }]
	//             }
	//         });
	// }]);

	// app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
	//     // currentAuth (provided by resolve) will contain the
	//     // authenticated user or null if not logged in
	// }]);

	// app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
	//     // currentAuth (provided by resolve) will contain the
	//     // authenticated user or null if not logged in
	// }]);

