function PostInputController() {
	var vm = this;
	vm.postBody = '';
	vm.addPost = function() {
		if (vm.postBody !== '') {
			vm.onUpdate({
				value: vm.postBody
			});
			vm.postBody = '';
		}
	};
}

angular.module('social-app')
	.component('postInput', {
		controller: PostInputController,
		templateUrl: 'postinput.html',
		bindings: {
			onUpdate: '&'
		}
	});