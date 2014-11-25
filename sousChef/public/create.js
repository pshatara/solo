var app = angular.module('sousChef.create', ['firebase'])

app.controller("CreateController", function($scope, $firebase) {
  
  var ref = new Firebase("https://souschef.firebaseio.com/");
  var sync = $firebase(ref);
  
  $scope.messages = sync.$asArray();

  $scope.recipeName = '';
  $scope.measurement = '';
  $scope.ingredientList = [];
  $scope.ingredient = '';
  $scope.directions = '';
  $scope.newRecipe;

  $scope.addRecipe = function(recipeName, directions, ingredients) {
    ref.child(recipeName).set({'name': recipeName, 'directions': directions, 'ingredients': ingredients});
  }

  $scope.addIngredient = function(ingredient, measurement) {
    // ref.child('test').child('ingredient').push([ingredient, measurement])
    this.ingredientList.push([measurement, ingredient]);
    console.log(this.ingredientList)
  }

  // $scope.updateDirections = function(recipeName, directions) {
  //   ref.child('test').set(directions);
  // }
});


// Recipe: {
//   Name: name,
//   Directions: directions,
//   Photo: photo,
//   Ingredients: {
//     ingredient: measure
//   }
// }