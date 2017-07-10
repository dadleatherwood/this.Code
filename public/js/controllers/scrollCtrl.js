angular.module('myApp').controller('scrollCtrl', function ($scope, $location, $anchorScroll){
  $scope.goToBeginner = function () {
    $location.hash('beginner-challenges');
    $anchorScroll()
  }

  $scope.goToIntermediate = function () {
    $location.hash('intermediate-challenges')
    $anchorScroll()
  }

  $scope.goToMaster = function () {
    $location.hash('master-challenges')
    $anchorScroll()
  }
})
