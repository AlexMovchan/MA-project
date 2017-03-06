angular.module('myApp')
.constant("baseUrl", "http://localhost:2403/my-comments/")
.controller('commentsCtrl', function($scope, $http, baseUrl){
        $scope.text = '';
        $scope.date = [];
        $scope.liked = false;

        $scope.print = function() {
            $scope.message.push({author: $scope.author, comment: $scope.text, like: false, date : new Date()});
            $scope.text = '';
            $scope.author ='';
        }
        $scope.changeLike = function() {
            this.item.like = true;
        }



        // получение всех данных из модели



/*
        // создание нового элемента
        $scope.create = function (item) {
            $http.post(baseUrl, item).success(function (item) {
                $scope.items.push(item);
            });
        }

        // удаление элемента из модели
        $scope.delete = function (item) {
            // HTTP DELETE
            // отправка DELETE запроса по адресу http://localhost:2403/items/id что приводит к удалению записей на сервере
            $http({
                method: "DELETE",
                url: baseUrl + item.id
            }).success(function () {
                $scope.items.splice($scope.items.indexOf(item), 1);
            });
        }

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