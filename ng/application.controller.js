angular.module('app')
	.controller('ApplicationCtrl', function() {
		var vm = this;
		vm.login = function(user) {
			vm.currentUser = user;
		};
		vm.logout = function() {
			//
		};
	}).config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode(true);
	}]);