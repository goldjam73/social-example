angular.module('social-app')
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
				template: '<login on-update="$ctrl.login(value)"></login>'
			});
	});
	