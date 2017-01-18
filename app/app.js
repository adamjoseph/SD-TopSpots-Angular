myApp = angular.module('myApp', []);
myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
		
		$http({
  		method: 'GET',
  		url: 'topspots.json'
		}).then(function(response) {
    	// this callback will be called asynchronously
    	$scope.topspots = response.data;
    	// when the response is available

  		//}, function errorCallback(response) {
    	// called asynchronously if an error occurs

    	// or server returns response with an error status.
		
		});//closes http get

    	$scope.addrow = function() {
    		
    		$scope.topspots.push({'name':$scope.name, 'description':$scope.description, 'location':$scope.location});
    		$scope.name = '';
    		$scope.description = '';
    		$scope.location = '';
    	};//closes addrow

    	
	}])//closes controller