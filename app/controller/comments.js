angular.module('myApp')
.controller('commentsCtrl', function($scope){
                $scope.text = '';
                $scope.message = [];
                $scope.date = [];

                $scope.liked = false;
                $scope.url = 'wall.html';
                $scope.print = function() {

                    $scope.message.push({author: $scope.author, name: $scope.text, like: false, date : new Date()});
                    $scope.text = '';
                    $scope.author ='';
                }
                $scope.changeLike = function() {
                    this.sms.like = true;
                }

                $scope.showWall = function() {
                     $scope.url = 'wall.html'
                }
                $scope.showGallery = function() {
                     $scope.url = 'gallery.html'
                }
                $scope.toLarge = function() {
                    $scope.picContiner = true;
                }
                $scope.toSmall = function() {
                    $scope.picContiner = false;
                }
        });