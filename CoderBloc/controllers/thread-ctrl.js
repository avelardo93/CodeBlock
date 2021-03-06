/*
 * Created by Kevo on 5/20/2016.
 */

var app = angular.module("CoderBloc", []);

app.controller("threadCtrl", ["$scope","$http","$window", function($scope, $http, $window){

	$scope.formData= {};

	$scope.createUser = function(){ // declare an obj to hold the user data from the sign up form


		var userData = { // grab the data from the form and get it ready for DB insertion
			userEmail: $scope.formData.userEmail,
			userName : $scope.formData.userName,
			userPass : $scope.formData.userPass
		};

		$http.post("/api/users", userData) // makes this data available in the http req
			.then(function(data){ // after successful post of new user

				//Mariah: adding usr info when they've successfully registered
				$scope.userLogInfo = "Thank you for registering, " + userData.userName + ". You may now Login";

				// alert("POST WORKING");
				// $window.location.assign("/index.html"); // redirect to index.html with user landing features

			})
			.error(function(data){
				console.log("Error: "+ data);
			});

	};

}]); //end app controller