angular.module('myApp').controller('usersCtrl', function($scope, $state, myAppSrv, $stateParams){
  $scope.getUsers = function(){
    myAppSrv.getUsers()
    .then(response => {
      $scope.users = response
      return response
    })
  }

  $scope.getUsers()
})
