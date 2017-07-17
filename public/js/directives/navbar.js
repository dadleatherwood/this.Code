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
        myAppSrv.logoutUser()
        .then(function(response) {
            $scope.user = {}
            $state.go('home')
        })
        .catch(function(err) {
          console.log(err)
        })
      }

      // Check if returning user
      myAppSrv.getUser()
      .then(function(response) {
        $scope.loggedIn = true
        $scope.user = response.data[0]
        $state.go('challenges')
      })
      .catch(function(err) {
        console.log("No user")
      })


    }
  }
})
