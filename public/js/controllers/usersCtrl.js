angular.module('myApp').controller('usersCtrl', function($scope, $state, myAppSrv, $stateParams){
  $scope.getUsers = function(){
    myAppSrv.getUsers()
    .then(response => {
      $scope.users = response
      return response
    })
  },

  $scope.getUserById = function() {
    myAppSrv.getUserById($stateParams.id)
    .then(function(response) {
      console.log(response)
      $scope.user = response[0]
    })
  }

  $scope.getUsers()

})
