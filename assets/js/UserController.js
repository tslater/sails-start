var UserController = function($scope, $location, $http, Restangular){

	$scope.location = $location;
	$scope.user = {};

	if($scope.user.isLoggedIn)
	$http.get('auth/isLoggedIn')
		.success(function(response){
			$scope.user = response;
		})
		.error(function(error){
			alert("Something is wrong with our site. Please try again soon!");
	});

	$scope.login = function(){
		$http.post('auth/login', $scope.user)
			.success(function(response){	
				if(response.isLoggedIn){
					$scope.user=response;
					$location.path('/');
				}
			}).error(function(response){
				console.log(response);
			});
	};

	$scope.logout = function(){
		$http.get('auth/logout').success(function(response){
			$scope.user = response;
			$location.path('/login');

		});

	}

	$scope.register = function(registerUserInfo){
		var user = Restangular.all('user');

		var registerSuccess = function(response){
			$scope.user = response;
		};

		var registerFail = function(response){
		};
		user.post(registerUserInfo).then(registerSuccess, registerFail);
	};

};