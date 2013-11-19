var UserController = function($scope, $location, $http, Restangular){

	$scope.location = $location;
	var user = $scope.user = {};


	$http.get('auth/isLoggedIn')
		.success(function(response){
			$scope.user = response;
		})
		.error(function(){
			alert("Something is wrong with our site. Please try again soon!");
	});

	$scope.login = function(){
		console.log(user);
		$http.post('auth/login', $scope.user)
			.success(function(response){
				$location.path('/');
			}).error(function(response){
				console.log(response);
			});
	};

	$scope.logout = function(){}

	$scope.register = function(registerUserInfo){
		var user = Restangular.all('user');

		var registerSuccess = function(response){
			alert('i did it!');
			user = response;
		};

		var registerFail = function(response){
			console.log("Error with status code", response.status);
		};

		user.post(registerUserInfo).then(registerSuccess, registerFail);

		

	};

};