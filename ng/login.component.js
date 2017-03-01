function LoginController($location, UserSvc) {
	var vm = this;
	vm.login = function() {
		UserSvc.login(vm.username, vm.password)
			.then(function(response) {
				vm.onUpdate({
					value: response.data
				});
				$location.path('/');
			});
	};
}

angular.module('social-app')
	.component('login', {
		controller: LoginController,
		templateUrl: 'login.html',
		bindings: {
			onUpdate: '&'
		}
	});