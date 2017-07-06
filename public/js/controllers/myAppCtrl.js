angular.module('myApp').controller('myAppCtrl',
function($scope, $state){
  $scope.test = "I am working"
  $scope.loggedIn = {loggedIn: false}
})
