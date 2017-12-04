const app = angular.module('EmployeeMgmt', [])


app.controller("EmployeeCtrl", function ($scope, $http) {
	$scope.newEmployee = {}
	// $scope.employees = ""
	$scope.getEmployees = function () {
		$http.get("https://employee-nss.firebaseio.com/.json")
		.then(res => {
			console.log(res.data)
			console.log($scope.employees)
			$scope.employees = res.data
			console.log($scope.employees)
			
		})
	}
 
	$scope.getEmployees()

	$scope.fireEmployee = function (key, employee) {
		employee.employmentEnd = Date.now()

		$http.put(`https://employee-nss.firebaseio.com/${key}.json`, employee).then(res => {
			console.log('bahleted', res)
		})
	

		// $http.delete(`https://employee-nss.firebaseio.com/${key}.json`).then(res => {
		// 	console.log('bahleted', res)
		// })
	}
	$scope.addEmployee = function () {
		$scope.newEmployee =	{
			"firstName": $scope.newEmployee.firstName,
			"lastName": $scope.newEmployee.lastName,
			"employmentStart": Date.now(),
			"employmentEnd": 0
		}

		$http.post("https://employee-nss.firebaseio.com/.json", $scope.newEmployee)
		.then(res => {
			console.log(res)
		})
		// console.log($scope.employees)
		$scope.newEmployee = {}
	}


})