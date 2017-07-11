angular.module('myApp').directive('modal', function(){
  return {
    templateUrl: "views/modal.html",
    restrict: 'E',
    scope: {
      modal: '=',
      failures: '='
    },
    controller: function($scope, $state, $timeout){
      $scope.changeView = function() {
        $('#challengeModal').modal('hide')
        $timeout(function() {
          $state.go("challenge", {id: $scope.modal.nextChallengeId})
        }, 200)
      }
    }
  }
})
