'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',[ '$scope', function($scope) {
	$scope.myFirstVar = "Hello Angular";
	$scope.myFirstArray = [
		{'name':'Quimi1','age':'33','stars':['5','6','7']},
		{'name':'Quimi2','age':'34','stars':['1','2','3']}
	];
	$scope.newitem={};
	$scope.itemAdd = function(myFirstArray){
		$scope.myFirstArray.push($scope.newitem);
		$scope.newitem={};
	};
}]);