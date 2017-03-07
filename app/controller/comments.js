angular.module('myApp')
    .constant("baseUrl", "http://localhost:2403/my-comments/")
    .controller('commentsCtrl', function($scope, $http, $resource, baseUrl){
            // $scope.text = '';
            // $scope.date = [];
            // $scope.liked = false;

            // $scope.print = function() {
            //     $scope.message.push({author: $scope.author, comment: $scope.text, like: false, date : new Date()});
            //     $scope.text = '';
            //     $scope.author ='';
            // }
            // $scope.changeLike = function(item) {
            //     item.like = true;
            //     item.$save();
            // }


            //$scope.itemsResource = $resource(baseUrl + ":id", { id: "@id" });
             $scope.message = [];
            // $scope.refresh = function () {
                $http.get(baseUrl).then(function (data) {
                    $scope.message = data;
                });
            // }
             // $scope.refresh();





           



    /*
            // редеактирование существующего или создание нового элемента
            $scope.editOrCreate = function (item) {
                $scope.currentItem = item ? angular.copy(item) : {};
                $scope.currentView = "edit";
            }

            // сохранение изменений
            $scope.saveEdit = function (item) {
                // Если у элемента есть свойство id выполняем редактирование
                // В данной реализации новые элементы не получают свойство id поэтому редактировать их невозможно (будет исправленно в слудующих примерах)
                if (angular.isDefined(item.id)) {
                    $scope.update(item);
                } else {
                    $scope.create(item);
                }
            }
    */
})