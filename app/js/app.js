 angular.module('myApp', ['ngRoute'])
 	.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when("/home", {
          templateUrl: "/home.html"
      });

      $routeProvider.when("/comments", {
          templateUrl: "/comments.html"
      });

      $routeProvider.when("/list", {
          templateUrl: "/list.html"
      });

      $routeProvider.otherwise({
          templateUrl: "/home.html"
      });
  })
 	.controller("defaultCtrl", function ($scope) {
 		$scope.text = ''
 	})
