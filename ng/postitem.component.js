angular.module('social-app')
	.component('postItem', {
		templateUrl: 'postitem.html',
		bindings: {
			post: '<'
		}
	});