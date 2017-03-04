.controller('commentsCtrl', function($scope){
                $scope.text = '';
                $scope.message = [];

                $scope.liked = false;
                $scope.url = 'wall.html';
                $scope.print = function() {
                    $scope.message.push({name: $scope.text, like: false});
                    $scope.text = '';
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