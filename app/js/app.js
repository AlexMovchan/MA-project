 angular.module('myApp', ['ngRoute'])
 	.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when("/home", {
          templateUrl: "/home.html"
      });

      $routeProvider.when("/comments", {
          templateUrl: "/comments.html"
      });

      $routeProvider.when("/abonents", {
          templateUrl: "/abonents.html"
      });

      $routeProvider.otherwise({
          templateUrl: "/home.html"
      });
  })
  .constant("baseUrl", "http://localhost:2403/my-comments/")
  .controller('defaultCtrl', function($scope,$http, baseUrl){
    $scope.message = [];
    // $scope.refresh = function () {
            $http.get(baseUrl).success(function (data) {
                $scope.message = data;
            });
        // }
     // $scope.refresh();
  })


