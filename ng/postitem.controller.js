(function() {
	'use strict';

	angular.module('app')
		.component('postItem', {
			templateUrl: 'postitem.html',
			bindings: {
				post: '<'
			}
		});
})();