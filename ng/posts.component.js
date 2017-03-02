function PostsController($scope, PostsSvc) {
	var vm = this;
	vm.addPost = function(value) {
		PostsSvc.create({
			body: value
		});
	};

	$scope.$on('ws:new_post', function(_, post) {
		$scope.$apply(function() {
			vm.posts.unshift(post);
		});
	});

	PostsSvc.fetch().then(function(response) {
		vm.posts = response.data;
	});
}

angular.module('social-app')
	.component('posts', {
		controller: PostsController,
		templateUrl: 'posts.html'
	});