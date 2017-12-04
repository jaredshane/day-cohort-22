const app = angular.module('TodoApp', [])

app.controller("TodoCtrl", ($scope, $http) => {
	$scope.title = "Welcome to your task list"
	$scope.macaroni = ""

	$scope.todos = [
    { name: "Mow the lawn", complete: "incomplete" },
    { name: "Cut the grass", complete: "complete" },
    { name: "Kill the ants", complete: "incomplete" },
    { name: "Trim the weeds", complete: "complete" }
	];

	$scope.killTodo = (todo) => {
		console.log(todo.name)
		$scope.macaroni = todo.name
	}	

 $scope.doThis = (myTodo) => {
	 console.log(myTodo)
 }

 $http
 .get("https://socks.firebaseio.com/songs/.json")
 .then(
		 function(firebaseObjectOfObjects) {
			 console.log(firebaseObjectOfObjects)
				//  for (let songId in firebaseObjectOfObjects) {
				// 		 console.log(firebaseObjectOfObjects[songId])
				//  }
		 }
 )
	

});