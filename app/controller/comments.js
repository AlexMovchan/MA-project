angular.module('myApp')
    .constant("baseUrl", "http://localhost:2403/my-comments/")
    .controller('commentsCtrl', function($scope, $http, baseUrl){

            $scope.message = [];

            $scope.refresh = function(){
	            $http.get(baseUrl).then(function (data) {
		            $scope.message = data;
		        });
        	}



            $scope.changeLike = function(item){
                if(item.like) {
                    item.like = false;
                }else {
                    item.like = true;
                }
                $http.put(baseUrl+item.id, item).then(function(item) {
                    $scope.refresh();
                });
            }



            $scope.addComent = function (item) {
                $http.post(baseUrl, item).then(function (item) {
                    $scope.message.data.push(item);
                    $scope.refresh();
                });
        	}



        	$scope.refresh();
})