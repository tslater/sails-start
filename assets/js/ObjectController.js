
var ObjectSaveController = function($scope, $route, $location, Restangular){
	$scope.backwardsClass = '';
	$scope.route = $route;
	$scope.newObject = {};
	
	var endpoint = Restangular.all('YourModelHere');

	$scope.saveObject = function(){
		endpoint.post($scope.newObject).then(function(response){
			refreshObjects();
			$location.path('/');
		});
	};

	

};

var ObjectListController = function($scope, $route, $location, Restangular){

	var endpoint = Restangular.all('YourModelHere');

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
}