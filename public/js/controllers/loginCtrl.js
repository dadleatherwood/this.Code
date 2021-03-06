angular.module('myApp').controller('loginCtrl', function($scope, $state, myAppSrv){
  $scope.createUser = function(user){
    myAppSrv.createUser(user)
    .then(function(response){
      if (response.status === 200) {
        localStorage.setItem("token", response.data[0].username)
        $state.go('challenges')
      }
    })
    .catch(function(err) {
      $scope.createError = err.data.message
    })
  },

  $scope.loginUser = function(user){
    myAppSrv.loginUser(user)
    .then(function(response){
      if (response.status === 200) {
        localStorage.setItem("token", response.data[0].username)
        $state.go('challenges')
      }
    })
    .catch(function(err) {
      $scope.loginError = err.data.message
    })
  }

  $scope.checkInputs = function() {
    if (!$scope.user || !$scope.user.first_name || !$scope.user.last_name || !$scope.user.username || !$scope.user.email || !$scope.user.password || !$scope.user.confirmPassword) {
      return true
    }
    return false
  }




})
