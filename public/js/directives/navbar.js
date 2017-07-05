angular.module('myApp').directive('navbar', function(){
  return {
    templateUrl: "views/navbar.html",
    restrict: 'E',
    scope: {
    },
    controller: function($scope, myAppSrv, $state, $rootScope){
      // What do I need here to get navbars to show up properly???
      $scope.loggedIn = false
      $rootScope.$on('loggedIn', function() {
        $scope.loggedIn = true
      })

    }
  }
})
