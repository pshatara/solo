angular.module('sousChef.create', [])

.controller('CreateController', function ($scope, $location, $http) {
  // Your code here
  $scope.measurement = '';
  $scope.ingredient = '';
  $scope.directions = '';

  // $scope.addIngredient = function() {
  // 	$http({
  // 		url: '/api/links',
  // 		method: 'POST',
  // 		data: {url: this.link}
  // 	}).success(function(data, status, headers, config) {
	 //  	console.log('The link has been added.')
  // 		console.log('Success:', data)
  // 		this.link = '';
  // 	}).error(function(data, status, headers, config) {
  // 		console.log('Error:', data);
  // 	})
  // };

});
