function PostInputController() {
	var vm = this;
	vm.addPost = function() {
		if (vm.postBody !== null) {
			vm.onUpdate({
				value: vm.postBody
			});
		}
	};
}

angular.module('app')
	.component('postInput', {
		controller: PostInputController,
		templateUrl: 'postinput.html',
		bindings: {
			postBody: '<',
			onUpdate: '&'
		}
	});