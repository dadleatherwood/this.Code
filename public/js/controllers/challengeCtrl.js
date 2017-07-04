angular.module('myApp').controller('challengeCtrl', function($scope, $state, myAppSrv, $stateParams){
  $scope.getChallengeById = function () {
    myAppSrv.getChallengeById($stateParams.id).then(function(response) { $scope.challenge = response[0]
    })
  }
  $scope.getChallengeById()
})
