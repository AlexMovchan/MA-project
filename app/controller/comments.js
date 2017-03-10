angular.module('myApp')
    .constant("baseUrl", "http://localhost:2403/my-comments/")
    .controller('commentsCtrl', function($scope, $http, baseUrl){

            $scope.message = [];

            $scope.refresh = function(){
	            $http.get(baseUrl).then(function (data) {
		            $scope.message = data;
		        });
        	}

            $scope.update = function (item) {
                // HTTP PUT
                // Отправка PUT запроса для обновления определенной записи на сервере
                $http({
                    url: baseUrl + item.id,
                    method: "PUT",
                    data: item
                }).then(function (modifiedItem) {
                    for (var i = 0; i < $scope.message.length; i++) {
                        if ($scope.message[i].id == modifiedItem.id) {
                            $scope.message[i] = modifiedItem;
                            break;
                        }
                    }
                    $scope.currentView = "table";
                });
            }

            $scope.addComent = function (item) {
                $http.post(baseUrl, item).then(function (item) {
                    $scope.message.data.push(item);
                });
                $scope.update(item)
        	}
           

           
        	$scope.refresh();
})