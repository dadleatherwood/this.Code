angular.module('myApp').directive('navbar', function(){
  return {
    templateUrl: "views/navbar.html",
    restrict: 'E',
    scope: {
    },
    controller: function($scope, myAppSrv, $state, $rootScope, $transitions){
      $scope.loggedIn = false
      $rootScope.$on('loggedIn', function() {
        $scope.loggedIn = true
      })
      $transitions.onBefore( { to: 'login' }, function(trans) {
        console.log("Moving to login")
        $scope.loggingIn = true
      });

      $scope.hideButton = function() {
        if ($scope.loggingIn || $scope.loggedIn) {
          return true
        }
        return false
      }

    }
  }
})
