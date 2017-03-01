function SocialController() {
	var vm = this;
	vm.login = function(user) {
		vm.currentUser = user;
	};
	vm.logout = function() {
		vm.currentUser = null;
	};
}

angular.module('social-app')
	.component('social', {
		controller: SocialController,
		templateUrl: 'social.html'
	});