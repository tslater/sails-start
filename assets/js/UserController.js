var UserController = function($scope, $location, $http, Restangular){
	var loginUser = $scope.loginUser = {};
	$scope.login = function(){
		var login = {
			username : loginUser.username,
			password : loginUser.password
		};
		$http.post('auth/login', login)
			.success(function(response){
				console.log(response);
			}).error(function(response){
				console.log(response);
			});
	};

	$scope.register = function(registerUserInfo){
		var user = Restangular.all('user');

		var registerSuccess = function(){
			
		};

		var registerFail = function(response){
			console.log("Error with status code", response.status);
		};

			user.post(registerUserInfo).then();

		

	};

};