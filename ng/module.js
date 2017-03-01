angular.module('social-app', [
	'ngRoute'
]).config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);
}]);