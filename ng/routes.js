angular.module('app')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<posts></posts>'
			})
			.when('/register', {
				controller: 'RegisterCtrl',
				templateUrl: 'register.html'
			})
			.when('/login', {
				controller: 'LoginCtrl',
				templateUrl: 'login.html'
			});
	});