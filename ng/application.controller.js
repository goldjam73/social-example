angular.module('app')
	.controller('ApplicationCtrl', function() {
		var vm = this;
		vm.login = function(user) {
			vm.currentUser = user;
		};
		vm.logout = function() {
			//
		};
	});