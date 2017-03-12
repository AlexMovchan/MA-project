 angular.module('myApp', ['ngRoute'])
 	.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when("/home", {
          templateUrl: "/views/home.html"
      });

      $routeProvider.when("/comments", {
          templateUrl: "/views/comments.html"
      });

      $routeProvider.when("/abonents", {
          templateUrl: "/views/abonents.html"
      });

      $routeProvider.otherwise({
          templateUrl: "/views/home.html"
      });
  })
  


