angular.module('myApp').controller('challengeCtrl', function($scope, $state, myAppSrv, $stateParams){
  $scope.getChallengeById = function () {
    myAppSrv.getChallengeById($stateParams.id).then(function(response) { $scope.challenge = response[0]
    })
  }
  $scope.testCode = function(code) {
    try {
      eval(code.code)
      code.challenge_id = $stateParams.id
      myAppSrv.testCode(code).then(function(response){
        $scope.tests = response
      })
    } catch (err){
      $scope.errorMessage = err.message
      // need to put on front-end still
    }
  }
  $scope.getChallengeById()
})
