

var myApp = angular.module('myApp', []);

myApp.controller('myCntl', function($scope, $http) {
	$http.get("data/items.json")
	.then(function(response) {
		$scope.items = response.data.items;
	});
});
