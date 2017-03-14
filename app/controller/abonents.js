angular.module('myApp')
	.constant("baseUrl1", "http://localhost:2403/my-abonents/")
	.controller('abonentsCtrl', function($scope, $http, baseUrl1){

	    $scope.abonents = [];

	    $scope.refresh = function(){
	        $http.get(baseUrl1).then(function (data) {
	            $scope.abonents = data;
	        });
		}
		$scope.addAbonent = function(item){
			$http.post(baseUrl1, item).then(function (item) {
                $scope.abonents.data.push(item);
                $scope.refresh();
            });
		}

		$scope.refresh();
		
})