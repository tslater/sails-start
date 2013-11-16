
var ObjectController = function($scope, $location, Restangular){
	$scope.test = "Welcome to Sails Start";
	
	var endpoint = Restangular.all('YourModelHere');

	$scope.saveObject = function(){
		endpoint.post($scope.newObject).then(function(response){
			$location.path('/');
		});
	};

	$scope.deleteObject = function(object){
		object.remove().then(function(){
			refreshObjects();
		});

	}

	refreshObjects = function(){
		endpoint.getList().then(function(list){
			$scope.objects = list;
		});
	}

	refreshObjects();

};