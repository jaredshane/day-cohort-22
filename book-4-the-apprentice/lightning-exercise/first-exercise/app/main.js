const app = angular.module('People', [])

app.controller('PeopleCtrl', ($scope, $http) => {

	$scope.doThisOnClick = () => {
		$http
		.get('../people.json')
		.then(res => {
			$scope.students = res.data.students
			console.log(res)
	
		})
	}

})