var app = angular.module('SailsStartApp', ['restangular','ngRoute', 'ngAnimate'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {
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
				.when('/404', {
					templateUrl: '/routes/404.html',
					controller: UserController,
				})
				.otherwise({redirectTo:'/404'});
	var interceptor = ['$location', '$q', function($location, $q) {
	        function success(response) {
	            return response;
	        }

	        function error(response) {

	            if(response.status === 403) {
	                $location.path('/login');
	                return $q.reject(response);
	            }
	            else {
	                return $q.reject(response);
	            }
	        }

	        return function(promise) {
	            return promise.then(success, error);
	        }
	    }];

    $httpProvider.responseInterceptors.push(interceptor);


	});