describe('posts.ctrl', function() {
	beforeEach(module('app'));
	var $scope, mockPostsSvc = {};

	beforeEach(inject(function($q) {
		mockPostsSvc.fetch = function() {
			var deferred = $q.defer();
			deferred.resolve({
				data: [{
					username: '@poster1',
					body: 'first post'
				}, {
					username: '@poster1',
					body: 'second post'
				}]
			});
			return deferred.promise;
		};
		mockPostsSvc.create = function() {
			var deferred = $q.defer();
			deferred.resolve();
			return deferred.promise;
		};
	}));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$controller('PostsCtrl', {
			$scope: $scope,
			PostsSvc: mockPostsSvc
		});
	}));

	it('loads posts from the service', function() {
		$scope.$digest();
		expect($scope.posts).to.have.length(2);
	});

	it('send new posts to the service', function() {
		var post = 'my new post';
		sinon.spy(mockPostsSvc, 'create');
		$scope.postBody = post;
		$scope.addPost();
		expect(mockPostsSvc.create).to.have.been.calledWith({body: post});
	});
});