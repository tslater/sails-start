var app = angular.module('SailsStartApp', ['restangular','ngRoute'])
	.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/routes/listObjects.html',
					controller: ObjectController,
				})
				.when('/createNew', {
					templateUrl: '/routes/createNew.html',
					controller: ObjectController,
				})
				.when('/login', {
					templateUrl: '/routes/login.html',
					controller: UserController,
				})
				.when('/about', {
					templateUrl: '/routes/about.html',
					controller: UserController,
				})
	});
