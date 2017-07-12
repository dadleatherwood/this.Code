angular.module('myApp').directive('navbar', function(){
  return {
    templateUrl: "views/navbar.html",
    restrict: 'E',
    scope: {
    },
    controller: function($scope, myAppSrv, $state, $rootScope, $transitions){
      $scope.loggedIn = false
      $rootScope.$on('loggedIn', function(event, user) {
        $scope.loggedIn = true
        $scope.user = user

      })
      $rootScope.$on('daysOfCode', function(event, daysOfCode) {
        $scope.daysOfCode = daysOfCode
      })

      $transitions.onBefore( { to: 'login' }, function(trans) {
        $scope.loggingIn = true
      });

      $scope.hideButton = function() {
        if ($scope.loggingIn || $scope.loggedIn) {
          return true
        }
        return false
      }

      $scope.signOut = function() {
        $scope.loggedIn = false;
        $scope.user = {}
        myAppSrv.user = {}
      }

    }
  }
})
