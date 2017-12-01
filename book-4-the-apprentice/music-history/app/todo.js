const app = angular.module('TodoApp', [])

app.controller("TodoCtrl", ($scope, $http) => {
	$scope.title = "Welcome to your task list"
	$scope.macaroni = ""

	$scope.todos = [
    { name: "Mow the lawn", complete: "incomplete" },
    { name: "Cut the grass", complete: "complete" },
    { name: "Kill the ants", complete: "incomplete" },
    { name: "Trim the weeds", complete: "complete" }
	]
	
	$scope.killTodo = (todo) => {
		// Do you see the PFM here of full object comparison?
		let todoIndex = $scope.todos.indexOf(todo)
	
		if (todoIndex >= 0) {
			$scope.todos.splice(todoIndex, 1)
		}
	}


	$http
  .get("https://socks.firebaseio.com/songs/.json")
  .then((firebaseObjectOfObjects) => {
		console.log(firebaseObjectOfObjects)
      for (let songId in firebaseObjectOfObjects) {
        console.log(firebaseObjectOfObjects[songId])
      }
    }
  );
});