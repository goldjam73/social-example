describe('posts.svc', function() {
	beforeEach(module('app'));
	var PostsSvc, $httpBackend;

	beforeEach(inject(function(_PostsSvc_, _$httpBackend_) {
		PostsSvc = _PostsSvc_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.flush();
	});

	describe('#fetch', function() {
		beforeEach(function() {
			$httpBackend.expect('GET', '/api/posts')
				.respond([{
					username: '@poster1',
					body: 'first post'
				}, {
					username: '@poster1',
					body: 'second post'
				}]);
		});
		it('gets two posts', function() {
			PostsSvc.fetch().success(function(posts) {
				expect(posts).to.have.length(2);
			});
		});
	});
});